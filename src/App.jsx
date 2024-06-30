import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import LoginPage from './components/Auth/LoginPage';
import AdminDashboard from './components/admin/AdminDashboard';
import EmployeeDashboard from './components/employee/EmployeeDashboard';
import CustomerList from './components/customer/CustomerList';
import AddCustomer from './components/customer/AddCustomer';
import Sidebar from './components/sidebar/Sidebar';
import CustomerMeasurements from './components/customer/CustomerMeasurements';

import { AuthProvider, AuthContext } from './contexts/AuthContext';

const { Content } = Layout;

const App = () => {
  const { user } = { name: 'Suraj' }; // useContext(AuthContext);

  return (
        <div className="min-h-screen flex w-full">
          <Content className="flex-1 bg-gray-900 text-white">
          <AuthProvider>
          <Router>
                <Routes>
                  <Route exact path="/" element={<LoginPage />} />
                  <Route path="/home" element={<EmployeeDashboard />} /> {/* Add HomePage route */}
                  <Route path="/admin-dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                  <Route path="/employee" element={<PrivateRoute><EmployeeDashboard /></PrivateRoute>} />
                  <Route path="/customers" element={<PrivateRoute><CustomerList /></PrivateRoute>} />
                  <Route path="/add-customer" element={<PrivateRoute><AddCustomer /></PrivateRoute>} />
                  <Route path="/employee/create-order" element={<CustomerList />} />
                  <Route path="/measurements" element={<CustomerMeasurements />} />
                </Routes>
            </Router>
    </AuthProvider>
          </Content>
        </div>
      
  );
};

const PrivateRoute = ({ children }) => {
  // const { user } = useContext(AuthContext);

  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  return children;
};

export default App;
