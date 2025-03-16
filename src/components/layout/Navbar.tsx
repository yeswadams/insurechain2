
import { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ConnectWallet from '../ui/ConnectWallet';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    // In a real app, this would clear auth tokens, cookies, etc.
    toast.success("Logged out successfully");
    navigate('/auth');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-insurBlue-600">
              InsureChain
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-700 hover:text-insurBlue-600 transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-gray-700 hover:text-insurBlue-600 transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-gray-700 hover:text-insurBlue-600 transition-colors duration-300"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-700 hover:text-insurBlue-600 transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
            </ul>
            
            <div className="flex items-center gap-4">
              <ConnectWallet />
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-insurBlue-600 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass animate-fade-in">
            <ul className="flex flex-col space-y-4 px-4">
              <li>
                <a 
                  href="#features" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-insurBlue-600 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#products"
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="block text-gray-700 hover:text-insurBlue-600 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works"
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="block text-gray-700 hover:text-insurBlue-600 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="block text-gray-700 hover:text-insurBlue-600 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li className="pt-2">
                <ConnectWallet />
              </li>
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full flex items-center justify-center gap-1 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
