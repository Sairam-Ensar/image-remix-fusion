
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-blue-600">Freedom Electronics</Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">HOME</Link>
            <Link to="/brand" className="text-gray-600 hover:text-blue-600">BY BRAND</Link>
            <Link to="/type" className="text-gray-600 hover:text-blue-600">BY TYPE</Link>
            <Link to="/dispenser" className="text-gray-600 hover:text-blue-600">DISPENSER SYSTEM</Link>
            <Link to="/pos" className="text-gray-600 hover:text-blue-600">POS SYSTEM</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2"><span className="sr-only">Search</span>🔍</button>
          <button className="p-2"><span className="sr-only">Account</span>👤</button>
          <button className="p-2"><span className="sr-only">Cart</span>🛒</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
