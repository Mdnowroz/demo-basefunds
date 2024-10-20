import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { ethers } from 'ethers';

interface PoolStatusProps {
  contract: ethers.Contract | null;
  signer: ethers.Signer | null;
}

const PoolStatus: React.FC<PoolStatusProps> = ({ contract, signer }) => {
  const [poolData, setPoolData] = useState({
    totalContributions: '0',
    poolBalance: '0',
    userContribution: '0',
  });

  useEffect(() => {
    const fetchPoolData = async () => {
      if (contract && signer) {
        try {
          const totalContributions = await contract.totalContributions();
          const poolBalance = await contract.getPoolBalance();
          const address = await signer.getAddress();
          const userContribution = await contract.contributions(address);

          setPoolData({
            totalContributions: ethers.utils.formatEther(totalContributions),
            poolBalance: ethers.utils.formatEther(poolBalance),
            userContribution: ethers.utils.formatEther(userContribution),
          });
        } catch (error) {
          console.error("Error fetching pool data:", error);
        }
      }
    };

    fetchPoolData();
    const interval = setInterval(fetchPoolData, 10000); // Refresh every 10 seconds

    return () => clearInterval(interval);
  }, [contract, signer]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Users className="mr-2 text-purple-500" />
        Pool Status
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Total Contributions</p>
          <p className="text-lg font-semibold">{poolData.totalContributions} ETH</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Pool Balance</p>
          <p className="text-lg font-semibold">{poolData.poolBalance} ETH</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Your Contribution</p>
          <p className="text-lg font-semibold">{poolData.userContribution} ETH</p>
        </div>
      </div>
    </div>
  );
};

export default PoolStatus;