# MPK Auto Service

A modern web application for MPK Auto Service, providing information about car maintenance services, booking, and more.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- PostgreSQL (for database)
- Supabase (for authentication and storage)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mpk-auto-service.git
   cd mpk-auto-service
   ```

2. Install dependencies:

   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the environment variables with your configuration

4. Start the development server:
   ```bash
   npm run dev
   ```
   This will start both the backend and frontend servers in development mode.

## 🛠️ Available Scripts

### Root Directory
- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run optimize-images` - Optimize images in the public directory
- `npm run db:push` - Push database schema changes

### Client Directory
- `npm run dev` - Start the Vite development server
- `npm run build` - Build the client for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
.
├── client/                 # Frontend React application (Vite + TypeScript)
│   ├── public/             # Static assets
│   ├── src/                # Source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── styles/         # Global styles
│   │   └── App.tsx         # Main App component
│   └── ...
│
├── server/                 # Backend server code
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Express middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   └── index.ts            # Server entry point
│
├── shared/                 # Shared code between frontend and backend
├── scripts/                # Utility scripts
│   └── optimize-images.js  # Image optimization script
│
├── .eslintrc.json         # ESLint configuration
├── .prettierrc             # Prettier configuration
├── package.json            # Root package.json
└── README.md               # This file
```

## 🔧 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with Radix UI components
- **State Management**: React Query
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router
- **Icons**: Lucide React
- **Animation**: Framer Motion

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Supabase Auth
- **API**: RESTful API
- **Validation**: Zod

## 🧪 Testing

To run tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## 🚀 Deployment

The application is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Set up the required environment variables
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by MPK Auto Service Team
