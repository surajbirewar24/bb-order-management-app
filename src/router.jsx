import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import AdminDashboard from './components/admin/AdminDashboard';
import EmployeeDashboard from './components/employee/EmployeeDashboard';
import AuthProvider from './contexts/AuthContext';

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          
          
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
