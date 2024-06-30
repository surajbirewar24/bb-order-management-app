import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
const CustomerList = () => {
  const navigate = useNavigate();

  const customers = [
    { id: '12d22', name: 'jane cooper' },
    { id: '5d255', name: 'esther howard' },
    { id: '147r7', name: 'guy hawkins' },
    { id: '124fd', name: 'savannah nguyen' },
  ];

  const handleAddCustomer = () => {
    navigate('/add-customer');
  };

  return (

    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-900 text-gray-300 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-orange-500">customers list</h1>
        <button 
          className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm"
          onClick={handleAddCustomer}
        >
          add new customer
        </button>
      </div>
      <div className="flex items-center mb-4">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <span className="text-sm">filter </span> 
      </div>
      <p className="text-sm mb-4">total customers ({customers.length})</p>
      <table className="w-full">
        <thead>
          <tr className="text-left text-xs uppercase">
            <th className="py-2">#</th>
            <th className="py-2">customer id</th>
            <th className="py-2">customer name</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id} className="border-t border-gray-700">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{customer.id}</td>
              <td className="py-2">{customer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
    
  );
};

export default CustomerList;
