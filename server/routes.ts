import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWholesaleInquirySchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Wholesale inquiry submission
  app.post("/api/wholesale-inquiry", async (req, res) => {
    try {
      const validatedData = insertWholesaleInquirySchema.parse(req.body);
      const inquiry = await storage.createWholesaleInquiry(validatedData);

      // Send email
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: '"Mi Piku Wholesale" <no-reply@ikena.com.au>',
        to: "info@ikena.com.au",
        subject: "New Wholesale Inquiry",
        text: `
          Name: ${validatedData.name}
          Company: ${validatedData.company}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone}
          Message: ${validatedData.message}
        `,
        html: `
          <h2>New Wholesale Inquiry</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Company:</strong> ${validatedData.company}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Message:</strong><br/>${validatedData.message}</p>
        `,
      });

      res.json({ 
        success: true, 
        message: "Thank you for your wholesale inquiry. We'll respond within 24 hours!",
        inquiry: { id: inquiry.id }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again later." 
        });
      }
    }
  });

  // Get all wholesale inquiries (for admin purposes)
  app.get("/api/wholesale-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getWholesaleInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve inquiries." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
