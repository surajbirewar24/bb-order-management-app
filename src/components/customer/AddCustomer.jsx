import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
const AddCustomer = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-orange-500">Add Customer</h1>
        <Link to="/" className="text-orange-500">skip for now</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block relative">
              <div className="bg-gray-700 w-24 h-24 rounded-full mx-auto"></div>
              <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                {/* Add Customer Image */}
              </button>
            </div>
          </div>
          <div>
            <Link to="/">
              <h2 className="text-lg font-semibold text-gray-400">Customer Information</h2>
            </Link>
            <Link to="/measurements">
              <h2 className="text-lg font-semibold text-gray-400">Measurements</h2>
            </Link>
          </div>
        </div>
        {/* Form */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Customer Name :</label>
            <input type="text" className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Age :</label>
            <input type="number" className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Gender :</label>
            <input type="text" className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Email :</label>
            <input type="email" className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Address :</label>
            <input type="text" className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Mobile No :</label>
            <input type="text" className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
          </div>
          <div className="text-center">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm">
              Save Information
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    
  );
};

export default AddCustomer;
