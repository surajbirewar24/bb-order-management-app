import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ViewCustomers = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Customers List</h1>
      <Button type="primary" onClick={() => navigate('/add-customer')}>Add New Customer</Button>
      {/* Table of customers can be added here */}
    </div>
  );
};

export default ViewCustomers;
