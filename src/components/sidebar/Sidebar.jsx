import React, { useContext } from 'react';
import AdminSidebar from './AdminSidebar';
import EmployeeSidebar from './EmployeeSidebar';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

// Import your SVG icons
import HomeIcon from '../../assets/thob-data/HomeIcon.svg';
import AddCustomerIcon from '../../assets/thob-data/AddCustomerIcon.svg';
import OrdersIcon from '../../assets/thob-data/OrdersIcon.svg';
import CategoriesIcon from '../../assets/thob-data/CategoriesIcon.svg';
import ProfileIcon from '../../assets/thob-data/ProfileIcon.svg';
import LogoutIcon from '../../assets/thob-data/LogoutIcon.svg';

  const handleNavigation = async (e, link) => {
    e.preventDefault();
    window.location = link
  };
const Sidebar = () => {
  //const { user } = useContext(AuthContext);
  //if (!user) return null;
  // return user.role === 'admin' ? <AdminSidebar /> : <EmployeeSidebar />;
  return (
    <div className="flex">
      <div className="bg-gray-800 w-16 min-h-screen flex flex-col items-center">
        <div className="text-white text-4xl mt-4">t.</div>
        <nav className="mt-10">
          <div onClick={() => handleNavigation("/admin-dashboard")} className="block mb-4">
            <img src={HomeIcon} alt="Home" className="w-8 h-8" />
          </div>
          <div onClick={() => handleNavigation("/admin/categories")} className="block mb-4">
            <img src={CategoriesIcon} alt="Categories" className="w-8 h-8" />
          </div>
          <div onClick={() => handleNavigation("/admin/manage-customers")} className="block mb-4">
            <img src={AddCustomerIcon} alt="Add Customer" className="w-8 h-8" />
          </div>
          <div onClick={() => handleNavigation("/admin/orders")} className="block mb-4">
            <img src={OrdersIcon} alt="Orders" className="w-8 h-8" />
          </div>
          <div onClick={() => handleNavigation("/admin/profile")} className="block mb-4">
            <img src={ProfileIcon} alt="Profile" className="w-8 h-8" />
          </div>
          <div onClick={() => handleNavigation("/admin/logout")} className="block mb-4">
            <img src={LogoutIcon} alt="Logout" className="w-8 h-8" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
