
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-insurBlue-600">InsureChain</h3>
            <p className="text-gray-600 max-w-xs">
              Decentralized insurance platform powered by blockchain technology for transparent, efficient, and secure coverage.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-insurBlue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-insurBlue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-insurBlue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Home Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Auto Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Health Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Crypto Asset Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  DeFi Coverage
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Claim Process
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-insurBlue-600 transition-colors">
                  Smart Contract Audit
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} InsureChain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
