# 🎉 EventZone - Event Management Web Application

A modern, full-featured event management platform built with the MERN stack architecture (MongoDB, Mongoose, Express.js, React.js, Redux, Node.js) featuring custom authentication, dynamic event operations, and an intuitive user interface.

> 🔗 **Live Site:** [event-zone-client.vercel.app](https://event-zone-client.vercel.app)  
> 🔗 **Backend API:** [event-zone-backend.vercel.app/api/v1](https://event-zone-backend.vercel.app/api/v1)

---

## 🌟 Overview

**EventZone** is a comprehensive event management solution that allows users to create, discover, and manage events seamlessly. The application provides a robust platform for event organizers and attendees with features like advanced search, filtering, real-time updates, and responsive design.

---

## ✨ Features

### 🔐 Authentication System

- ✅ **Custom Authentication**: Built without third-party packages
- 🔒 **Secure Login/Registration**: Email and password validation
- 🛡 **Protected Routes**: Route-based access control

### 🎪 Event Management

- 📅 **Create Events**: Comprehensive event creation with date/time picker
- 🔍 **Browse Events**: View all events with sorting and filtering
- 👥 **Join Events**: One-click event participation
- 📂 **My Events**: Personal dashboard for organizers
- ✏️ **Update/Delete**: Full CRUD operations for event owners
- 📊 **Real-Time Attendee Count**: Dynamic participant tracking

### 🔍 Advanced Search & Filtering

- 🔤 **Text Search**: Search by event title or organizer name
- 🗓 **Date Filtering**: Filter by specific dates or ranges
- ⏱ **Quick Filters**: Today, current week, last week, current/last month
- 🌐 **URL State Management**: Shareable and bookmarkable filter states
- ❌ **Clear Filters**: One-click reset

---

## 🛠 Tech Stack

### 🖥 Frontend

- ⚛️ React (with Hooks)
- 🧠 TypeScript
- 🔁 React Router
- 📋 React Hook Form
- 📦 Redux Toolkit
- 🔐 Zod for validation
- 💅 Tailwind CSS + shadcn/ui
- 🎨 Lucide React Icons

### 🛠 Backend

- 🟢 Node.js
- 🚂 Express.js
- 🛢 MongoDB
- 📚 Mongoose ODM
- 🌍 CORS for API communication

---

## 🧪 Demo Credentials

You can use the following credentials to explore the app:

- **Email:** `masumrana.dev.bd.com`
- **Password:** `password123`

---

## 📁 Project Structure

 src/
├── assets/                 # Static files like images, fonts, etc.
├── components/            # Reusable UI components
│   ├── layout/            # Application layout components (e.g., Layout.tsx)
├── pages/                 # Route-based pages
│   ├── add-event/         # Add new event page (AddEvent.tsx)
│   ├── events/            # Event list and filters
│   │   ├── components/    # Event-related components
│   │   │   ├── EventCard.tsx
│   │   │   ├── EventCardSkeleton.tsx
│   │   │   └── EventsFilter.tsx
│   │   └── Events.tsx
│   ├── home/              # Homepage
│   ├── login/             # Login page
│   ├── my-events/         # Page for viewing user’s own events
│   ├── registration/      # Registration page
│   └── update-event/      # Update existing event
├── router/                # App routing configuration
│   └── routes.tsx
├── shared/                # Shared UI and logic components
│   ├── navbar/            # Navigation bar components
│   └── protector/         # Route protection/auth guards
├── constant/              # Constants and static config files
│   ├── loanapply.ts       # Loan application constants (example)
│   └── storage.key.ts     # Local storage keys
├── helper/                # Utility/helper functions
├── interface/             # TypeScript interfaces
│   └── interface.ts
├── lib/                   # Shared libraries or utilities
├── redux/                 # Redux state management setup
│   ├── api/               # RTK Query API slices
│   ├── features/          # Redux feature slices
│   ├── store/             # Redux store configuration
│   ├── hooks.ts           # Custom Redux hooks
│   └── rootReducer.ts     # Root reducer (if applicable)

