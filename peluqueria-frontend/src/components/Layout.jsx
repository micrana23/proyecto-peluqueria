import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2024 Xtylo Peluquería
      </footer>
    </div>
  );
};

export default Layout;
