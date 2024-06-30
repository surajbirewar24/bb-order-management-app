import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Sidebar.css';


import HomeIcon from '../../assets/thob-data/HomeIcon.svg';
import AddCustomerIcon from '../../assets/thob-data/AddCustomerIcon.svg';
import OrdersIcon from '../../assets/thob-data/OrdersIcon.svg';
import CategoriesIcon from '../../assets/thob-data/CategoriesIcon.svg';
import ProfileIcon from '../../assets/thob-data/ProfileIcon.svg';
import LogoutIcon from '../../assets/thob-data/LogoutIcon.svg';

const { Sider } = Layout;

const EmployeeSidebar = () => {
  return (
    <Sider width={60} className="sidebar">
      <div className="logo">t.</div>
      <div className="menu">
        <Link to="/admin-dashboard">
          <Button type="link" icon={<HomeIcon />} className="menu-item" />
        </Link>
        <Link to="/admin/categories">
          <Button type="link" icon={<CategoriesIcon />} className="menu-item" />
        </Link>
        <Link to="/admin/manage-customers">
          <Button type="link" icon={<AddCustomerIcon />} className="menu-item" />
        </Link>
        <Link to="/admin/orders">
          <Button type="link" icon={<OrdersIcon />} className="menu-item" />
        </Link>
        <Link to="/admin/profile">
          <Button type="link" icon={<ProfileIcon />} className="menu-item" />
        </Link>
        <Link to="/admin/logout">
          <Button type="link" icon={<LogoutIcon />} className="menu-item" />
        </Link>
      </div>
    </Sider>
  );
};

export default EmployeeSidebar;
