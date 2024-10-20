import React from 'react';
import { PiggyBank } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <PiggyBank size={32} />
          <h1 className="text-2xl font-bold">Community Savings Pool</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;