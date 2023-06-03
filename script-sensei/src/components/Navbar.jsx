import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/path/to/logo.png"
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
        <h1 className="text-white text-lg font-semibold">Web App Title</h1>
      </div>
      <div className="flex items-center">
        <img
          src="/path/to/avatar.png"
          alt="Avatar"
          className="h-8 w-8 rounded-full"
        />
        <span className="text-white ml-2">Username</span>
      </div>
    </nav>
  );
};

export default Navbar;
