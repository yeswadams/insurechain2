
import React from 'react';

interface PageHeaderProps {
  userName: string;
  policyNumber: string;
  phoneNumber: string;
  userEmail: string;
}

const PageHeader = ({ userName, policyNumber, phoneNumber, userEmail }: PageHeaderProps) => {
  return (
    <header className="bg-insurBlue-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex flex-col  items-center gap-2">
        <div className="text-2xl font-bold text-center">InsureChain</div>
        <div className="flex flex-col md:flex-row items-center gap-1">
          <div className="font-medium">{userName} •</div>
          <div className="text-insurBlue-200 text-sm">
            Policy #{policyNumber} • {phoneNumber} • {userEmail}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
