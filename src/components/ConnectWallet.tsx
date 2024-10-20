import React from 'react';
import { Wallet } from 'lucide-react';

interface ConnectWalletProps {
  onConnect: () => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ onConnect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <Wallet size={64} className="text-blue-600 mb-4" />
      <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        To participate in the Community Savings Pool, you need to connect your wallet. This allows you to contribute, borrow, and manage your funds securely.
      </p>
      <button
        onClick={onConnect}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;