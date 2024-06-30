import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-content">
        <Button type="primary" onClick={() => navigate('/admin/create-order')}>Create Order</Button>
        <Button type="primary" onClick={() => navigate('/admin/view-orders')}>View Orders</Button>
        <Button type="primary" onClick={() => navigate('/admin/view-customers')}>View Customers</Button>
      </div>
    </div>
  );
};

export default AdminDashboard;
