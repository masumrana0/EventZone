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
│
├── assets/                  # Static assets (images, fonts, etc.)
│
├── components/              # Reusable layout components
│   └── layout/
│       └── Layout.tsx       # App layout (e.g. with Navbar/Sidebar)
│
├── pages/                   # Top-level route pages
│   ├── add-event/           # Page for creating a new event
│   ├── events/              # Event listing page
│   │   ├── components/      # Event-related reusable components
│   │   │   ├── EventCard.tsx
│   │   │   ├── EventCardSkeleton.tsx
│   │   │   └── EventsFilter.tsx
│   │   └── Events.tsx
│   ├── home/                # Homepage
│   ├── login/               # Login page
│   ├── my-events/           # My created/joined events
│   ├── registration/        # Registration page
│   └── update-event/        # Update event page
│
├── router/                  # Application routing configuration
│
├── shared/                  # Shared UI and wrapper components
│   ├── navbar/
│   │   └── Navbar.tsx
│   └── protector/           # Auth guards or protected route wrappers
│
├── ui/                      # Shadcn-style UI components (buttons, inputs, etc.)
│
├── constant/                # Constants (e.g. keys, roles, routes)
│
├── helper/                  # Utility/helper functions
│
├── interface/               # TypeScript interfaces & types
│
├── lib/                     # Common libraries (e.g. date formatting, utility classes)
│
├── redux/                   # Redux Toolkit setup and API slices
│
├── service/                 # API calls or service layer logic
│
└── utils/                   # Generic utilities (e.g. localStorage handlers)
