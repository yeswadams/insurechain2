import React from 'react';
import { NavLink } from 'react-router-dom';

interface TrapeziumTabProps {
  name: string;
  path: string;
  onClick: (path: string) => void;
}

const TrapeziumTab: React.FC<TrapeziumTabProps> = ({ name, path, onClick }) => {
  return (
    <NavLink
      to={path}
      onClick={(e) => {
        e.preventDefault();
        onClick(path);
      }}
      className={({ isActive }) => `
        relative inline-block min-w-[180px] h-[45px]
        ${isActive ? 'text-white' : 'text-[#2D2D2D]'}
      `}
    >
      {({ isActive }) => (
        <div className="relative w-full h-full">
          {/* Background trapezium */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 180 45" 
            preserveAspectRatio="none"
          >
            {/* Main trapezium fill */}
            <path
              d="M20 0 L160 0 L180 45 L0 45 Z"
              className={`
                ${isActive ? 'fill-[#4A90E2]' : 'fill-transparent'}
                transition-colors duration-200
              `}
            />
            {/* Top and side borders only */}
            <path
              d="M20 0 L160 0 M160 0 L180 45 M20 0 L0 45"
              className="stroke-[#4A90E2] stroke-2 fill-none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          
          {/* Text content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-medium text-sm">
              {name}
            </span>
          </div>
        </div>
      )}
    </NavLink>
  );
};

export default TrapeziumTab;
