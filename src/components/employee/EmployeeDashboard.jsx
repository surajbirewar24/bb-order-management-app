import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link); // Redirects to the '/customers' route
  };
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full flex flex-col min-h-screen bg-gray-900 text-white">
        <header className="w-full p-4 flex justify-between items-center bg-gray-900">
          <div className="flex items-center">
            <h1 className="text-orange-500 text-2xl font-bold">home</h1>
          </div>
          <div>
            <p className="text-gray-400">welcome back (ester howard)</p>
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-3xl text-center">
            <img src="path_to_image" alt="Suit" className="w-full rounded-md mb-6" />
            <button
              className="w-full py-4 bg-orange-500 text-black rounded-md font-semibold mb-4 hover:bg-orange-400"
              onClick={() => handleClick('/customers')}
            >
              create a new order
            </button>
            <button
              className="w-full py-4 bg-orange-500 text-black rounded-md font-semibold mb-4 hover:bg-orange-400"
              onClick={() => handleClick('/customers')}
            >
              view orders
            </button>
            <button
              className="w-full py-4 bg-orange-500 text-black rounded-md font-semibold mb-4 hover:bg-orange-400"
              onClick={() => handleClick('/customers')}
            >
              view customers
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
