import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from "./teacherTopbar";
import Sidebar from "./teacherSidebar";
import SubjectCard from "./SubjectCard";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  return (
    <div className="app">
      {/* TopBar stays at the top */}
      <TopBar toggleSidebar={toggleSidebar} />
      
      {/* Sidebar is displayed based on the `isSidebarOpen` state */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div className="dashboard-content">
        <SubjectCard /> {/* Insert SubjectCard here */}
      </div>
      
    </div>
  );
};

export default TeacherDashboard;
