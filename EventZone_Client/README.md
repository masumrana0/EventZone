# 🎉 EventHub - Event Management Web Application

A modern, full-featured event management platform built with the MERN stack architecture (MongoDB, Express.js, React.js, Node.js) featuring custom authentication, dynamic event operations, and an intuitive user interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

EventZone is a comprehensive event management solution that allows users to create, discover, and manage events seamlessly. The application provides a robust platform for event organizers and attendees with features like advanced search, filtering, real-time updates, and responsive design.

## ✨ Features

### 🔐 Authentication System

- **Custom Authentication**: Built without third-party packages
- **Secure Login/Registration**: Email and password validation
- **Protected Routes**: Route-based access control

### 🎪 Event Management

- **Create Events**: Comprehensive event creation with date/time picker
- **Browse Events**: View all events with sorting and filtering
- **Join Events**: One-click event participation
- **My Events**: Personal event dashboard for organizers
- **Update/Delete**: Full CRUD operations for event owners
- **Real-Time Attendee Count**: Dynamic participant tracking

### 🔍 Advanced Search & Filtering

- **Text Search**: Search by event title or organizer name
- **Date Filtering**: Filter by specific dates or date ranges
- **Quick Filters**: Today, current week, last week, current/last month
- **URL State Management**: Shareable and bookmarkable filter states
- **Clear Filters**: One-click filter reset

## 🛠 Tech Stack

### Frontend

- **React**: Modern React with hooks and context
- **TypeScript**: Type-safe development
- **React Router**: Client-side routing
- **React Hook Form**: Form management and validation
- **Redux**: State Management
- **Zod**: Schema validation
- **shadcn/ui**: Modern UI component library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons

### Backend (Architecture)

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **CORS**: Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/eventhub.git
   cd eventhub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   MONGODB_URI=mongodb://localhost:27017/eventhub
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Demo Credentials

For testing purposes, use these demo credentials:

- **Email**: john@example.com
- **Password**: password123

## 📁 Project Structure

```
eventhub/
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── navbar.tsx          # Navigation component
│   │   └── private-route.tsx   # Route protection
│   ├── contexts/
│   │   ├── auth-context.tsx    # Authentication state
│   │   └── event-context.tsx   # Event management state
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── validations.ts     # Zod schemas
│   ├── hooks/                 # Custom React hooks
│   └── App.tsx               # Main application component
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🔑 Key Components

### Authentication Flow

1. **Registration**: New user account creation with validation
2. **Login**: Secure authentication with JWT tokens
3. **Route Protection**: Automatic redirection for unauthorized access
4. **Session Management**: Persistent login state across browser sessions

### Event Management Flow

1. **Event Creation**: Comprehensive form with date/time picker
2. **Event Discovery**: Advanced search and filtering system
3. **Event Participation**: One-click join functionality
4. **Event Management**: Full CRUD operations for event owners

### State Management

- **React Context**: Global state management for auth and events
- **URL State**: Filter states persisted in URL parameters
- **Local Storage**: User session persistence

## 🔐 Authentication

The application implements a custom authentication system:

### Features

- **Email/Password Authentication**: Secure login system
- **Form Validation**: Real-time validation with Zod schemas
- **Protected Routes**: Automatic redirection for unauthorized users
- **Session Persistence**: Login state maintained across browser sessions
- **User Profile**: Profile picture and user information management

### Security Measures

- **Password Hashing**: bcrypt for secure password storage
- **JWT Tokens**: Secure authentication tokens
- **Input Validation**: Comprehensive form validation
- **XSS Protection**: Sanitized user inputs

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Events

- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `GET /api/events/:id` - Get specific event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event
- `POST /api/events/:id/join` - Join event

### Users

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/events` - Get user's events

## 📸 Screenshots

### Home Page

![Home Page](screenshots/home.png)
_Modern landing page with feature highlights_

### Events Page

![Events Page](screenshots/events.png)
_Event browsing with advanced search and filtering_

### Event Creation

![Add Event](screenshots/add-event.png)
_Intuitive event creation form with date/time picker_

### My Events Dashboard

![My Events](screenshots/my-events.png)
_Personal event management dashboard_

## 🎨 Design System

### Color Palette

- **Primary**: Modern blue (#3B82F6)
- **Secondary**: Subtle gray (#6B7280)
- **Success**: Green (#10B981)
- **Warning**: Amber (#F59E0B)
- **Error**: Red (#EF4444)

### Typography

- **Headings**: Inter font family
- **Body**: System font stack
- **Code**: Fira Code

### Components

- **Cards**: Elevated design with subtle shadows
- **Buttons**: Consistent styling with hover states
- **Forms**: Clean inputs with validation feedback
- **Navigation**: Responsive navbar with mobile menu

## 🧪 Testing

### Test Coverage

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Complete user flow testing

### Running Tests

```bash
npm run test          # Run unit tests
npm run test:e2e      # Run end-to-end tests
npm run test:coverage # Generate coverage report
```

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Deployment Options

- **Vercel**: Recommended for frontend deployment
- **Netlify**: Alternative frontend hosting
- **Heroku**: Full-stack deployment
- **DigitalOcean**: VPS deployment

### Environment Variables

```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- **shadcn/ui**: For the beautiful component library
- **Tailwind CSS**: For the utility-first CSS framework
- **React Hook Form**: For excellent form management
- **Zod**: For robust schema validation
- **Lucide**: For the comprehensive icon library

## 📊 Project Stats

- **Lines of Code**: ~3,000+
- **Components**: 15+
- **Pages**: 6
- **Features**: 20+
- **Development Time**: 2 weeks

---

**Built with ❤️ for the MERN Stack Job Application**

_This project demonstrates proficiency in modern web development technologies and best practices, showcasing skills in React, TypeScript, state management, authentication, responsive design, and user experience._

```

This comprehensive README file showcases your EventHub project professionally, highlighting all the key features, technical implementation, and demonstrating your skills for the job application. It includes everything a potential employer would want to see: technical depth, clear documentation, professional presentation, and evidence of modern development practices.
```
