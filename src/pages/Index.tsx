
import React from 'react';
import Navigation from '@/components/Navigation';
import AccountRequestForm from '@/components/AccountRequestForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-blue-600">Home</a>
            <span className="mx-2">›</span>
            <a href="/account" className="hover:text-blue-600">Account</a>
            <span className="mx-2">›</span>
            <span>Account Request</span>
          </div>
          <AccountRequestForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
