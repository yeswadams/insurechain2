
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TrapeziumTab from './TrapeziumTab';
import { Menu, X } from 'lucide-react';
import ThreeDotLoader from './ThreeDotLoader';

const TabNavigation = () => {
  const tabs = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Policies', path: '/policies' },
    { name: 'Quotes', path: '/quotes' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Claims', path: '/claims' },
    
  ];
  
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle screen resize to reset menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const handleTabClick = (path: string) => {
    if (location.pathname !== path) {
      setIsLoading(true);
      
      // Navigate after a short delay to show loading state
      setTimeout(() => {
        navigate(path);
        setIsLoading(false);
      }, 1500);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#F9FAFB] border-b">
      <div className="container mx-auto">
        {/* Mobile hamburger menu */}
        <div className="md:hidden flex justify-between items-center py-4 px-4">
          <span className="font-medium text-lg text-[#1E3A5F]">Insurance Portal</span>
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu (dropdown) */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-2 px-4 bg-white shadow-md rounded-md`}>
          {tabs.map((tab) => (
            <button
              key={tab.path}
              onClick={() => handleTabClick(tab.path)}
              className={`w-full text-left py-3 px-4 rounded-md mb-2 ${
                location.pathname === tab.path 
                  ? 'bg-[#4A90E2] text-white' 
                  : 'text-[#2D2D2D] hover:bg-gray-100'
              }`}
              disabled={isLoading}
            >
              {isLoading && location.pathname !== tab.path ? (
                <div className="flex justify-center">
                  <ThreeDotLoader />
                </div>
              ) : (
                tab.name
              )}
            </button>
          ))}
        </div>

        {/* Desktop tabs */}
        <div className="hidden md:flex items-center justify-start py-6 px-4 overflow-x-auto">
          {tabs.map((tab) => (
            <TrapeziumTab
              key={tab.path}
              name={tab.name}
              path={tab.path}
              onClick={handleTabClick}
            />
          ))}
        </div>
      </div>

      {/* Full-screen loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ThreeDotLoader />
          </div>
        </div>
      )}
    </div>
  );
};

export default TabNavigation;
