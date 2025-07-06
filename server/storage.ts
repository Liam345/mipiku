import { users, wholesaleInquiries, type User, type InsertUser, type WholesaleInquiry, type InsertWholesaleInquiry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWholesaleInquiry(inquiry: InsertWholesaleInquiry): Promise<WholesaleInquiry>;
  getWholesaleInquiries(): Promise<WholesaleInquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private wholesaleInquiries: Map<number, WholesaleInquiry>;
  private currentUserId: number;
  private currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.wholesaleInquiries = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWholesaleInquiry(insertInquiry: InsertWholesaleInquiry): Promise<WholesaleInquiry> {
    const id = this.currentInquiryId++;
    const inquiry: WholesaleInquiry = {
      ...insertInquiry,
      id,
      phone: insertInquiry.phone || null,
      createdAt: new Date(),
    };
    this.wholesaleInquiries.set(id, inquiry);
    return inquiry;
  }

  async getWholesaleInquiries(): Promise<WholesaleInquiry[]> {
    return Array.from(this.wholesaleInquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
