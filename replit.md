# Mi Piku - Plush Toys & Wholesale Partnership Platform

## Overview

This is a full-stack web application for Mi Piku, a plush toy company that serves both end consumers and wholesale partners. The application is built as a single-page application (SPA) with a React frontend, Express.js backend, and PostgreSQL database using Drizzle ORM.

The system features a modern, responsive design with a focus on showcasing products and facilitating wholesale business partnerships through inquiry forms and contact management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom brand colors and shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite with custom configuration for development and production
- **Component Library**: Radix UI primitives with custom shadcn/ui styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling
- **Middleware**: Express middleware for JSON parsing, URL encoding, and request logging
- **Development**: Hot reload with Vite integration in development mode

### Database Architecture
- **Database**: PostgreSQL with Neon Database integration
- **ORM**: Drizzle ORM with TypeScript schema definitions
- **Migration Strategy**: Drizzle Kit for schema migrations
- **Connection**: @neondatabase/serverless for optimized serverless connections

## Key Components

### 1. Product Showcase System
- Multi-section landing page with hero, brand story, product showcase, and wholesale information
- Responsive image galleries using Unsplash for product visualization
- Custom brand color palette (coral, mint, lavender, teal, olive, sunny)
- Smooth scrolling navigation between page sections

### 2. Wholesale Inquiry Management
- Form-based inquiry system with validation using React Hook Form and Zod
- Contact information capture (name, company, email, phone, message)
- Backend API for storing and retrieving wholesale inquiries
- Toast notifications for user feedback

### 3. UI Component System
- Comprehensive shadcn/ui component library integration
- Custom themed components with brand-specific styling
- Responsive design patterns with mobile-first approach
- Accessibility features built into Radix UI primitives

### 4. Development Infrastructure
- TypeScript configuration for full-stack type safety
- Path aliases for clean imports (@/, @shared/, @assets/)
- ESLint and build configurations for code quality
- Replit-specific development tooling integration

## Data Flow

### 1. Client-Side Flow
1. User interacts with React components
2. Form submissions trigger TanStack Query mutations
3. API requests sent to Express backend
4. Response handling with toast notifications
5. UI updates based on success/error states

### 2. Server-Side Flow
1. Express receives HTTP requests
2. Request validation using Zod schemas
3. Business logic processing in route handlers
4. Database operations through Drizzle ORM
5. Structured JSON responses with error handling

### 3. Database Schema
- **users**: Basic user management (id, username, password)
- **wholesale_inquiries**: Business inquiry tracking (id, name, company, email, phone, message, created_at)
- Type-safe schema definitions shared between client and server

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **zod**: Runtime type validation
- **wouter**: Lightweight routing

### UI/UX Libraries
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **clsx & tailwind-merge**: Conditional CSS class handling
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities

### Development Tools
- **vite**: Fast build tool and dev server
- **typescript**: Static type checking
- **esbuild**: Fast JavaScript bundler for production
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied to PostgreSQL

### Environment Configuration
- **Development**: Uses tsx for hot reload with Vite middleware
- **Production**: Serves static files from dist/public and API routes
- **Database**: Environment variable `DATABASE_URL` for connection

### Deployment Targets
- Designed for serverless/edge deployment
- Optimized for Replit hosting environment
- Static asset serving with Express in production
- Database migrations through Drizzle Kit

## Changelog
- July 06, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.