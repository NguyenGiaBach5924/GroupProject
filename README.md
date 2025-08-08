# USTH Chatbot - Educational Platform

A comprehensive educational platform built with React that provides an interactive learning environment for students and teachers at USTH (University of Science and Technology of Hanoi). The platform includes AI-powered chatbot assistance, quiz/test management, and collaborative learning features.

## 🚀 Features
### For Teachers
- **Teacher Dashboard**: Comprehensive dashboard for course management
- **Test Creation**: Create tests manually or randomly generate them
- **Question Bank**: Manage and organize question banks
- **Chapter Management**: Create and manage chapters and content
- **Student Analytics**: View student performance and rankings
- **Content Management**: Upload and manage educational materials

### Core Features
- **Role-based Authentication**: Secure login system with different access levels
- **Real-time Chat**: AI-powered chatbot for student assistance
- **Responsive Design**: Modern UI with Material-UI components
- **PDF Generation**: Export test results and reports
- **Data Visualization**: Charts and analytics for performance tracking

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM 6.28.0** - Client-side routing
- **Material-UI 6.1.6** - UI component library
- **Chart.js 4.4.7** - Data visualization
- **React Quill 2.0.0** - Rich text editor
- **Axios 1.7.7** - HTTP client
- **JWT Decode 4.0.0** - JWT token handling

### Backend Integration
- **Express.js** - API server
- **Botpress Cloud** - AI chatbot integration
- **JWT Authentication** - Secure token-based auth
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting
- **Vite** - Build tool and dev server
- **React DevTools** - Development debugging
## 🔧 Configuration

### Botpress Integration
The platform integrates with Botpress Cloud for AI chatbot functionality. Configure your Botpress instance in `src/api/server.js`:



## 👥 User Roles

### Student Features
- Access to learning materials
- Take quizzes and tests
- Chat with AI assistant
- View progress and results
- Access theory content

### Teacher Features
- Create and manage tests
- Manage question banks
- Upload educational content
- View student analytics
- Manage chapters and subjects

## 🔐 Authentication

The platform uses JWT-based authentication with role-based access control:
- Students can access student-specific features
- Teachers have access to administrative features
- Protected routes ensure proper access control

## 📱 Key Components

### Dashboard Components
- `StudentDashboard.jsx` - Student main interface
- `TeacherDashboard.jsx` - Teacher main interface
- `Sidebar.jsx` - Navigation sidebar
- `Topbar.jsx` - Top navigation bar

### Learning Components
- `Quiz.jsx` - Quiz taking interface
- `Test.jsx` - Test taking interface
- `Theory.jsx` - Theory content viewer
- `Exercise.jsx` - Exercise practice

### Management Components
- `QuestionBank.jsx` - Question management
- `TestCreationOptions.jsx` - Test creation interface
- `ChapterList.jsx` - Chapter management
- `Ranking.jsx` - Student rankings

### Chat Components
- `ChatArea.jsx` - AI chatbot interface
- `History.jsx` - Chat history management

## 🎨 UI/UX Features

- **Modern Design**: Clean and intuitive interface
- **Responsive Layout**: Works on desktop and mobile devices
- **Material Design**: Consistent design language
- **Dark/Light Themes**: Customizable appearance
- **Smooth Animations**: Enhanced user experience

## 🔄 API Integration

The platform integrates with several APIs:
- **Authentication API** - User login/registration
- **Botpress API** - AI chatbot functionality
- **Content API** - Educational content management
- **Analytics API** - Performance tracking

## 📊 Data Management

- **Local Storage** - User session management
- **JWT Tokens** - Secure authentication
- **State Management** - React Context for global state
- **Caching** - Optimized data fetching

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** - Recommended for React apps
- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack deployment
- **Traditional hosting** - Upload build files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Development Team

This project was developed as a group project for USTH (University of Science and Technology of Hanoi).

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Note**: This is an educational platform designed by a group of USTH student for USTH students and teachers. 