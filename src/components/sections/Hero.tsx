
import { useState, useEffect } from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-insurBlue-100 blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`inline-flex items-center px-3 py-1 rounded-full bg-insurBlue-50 border border-insurBlue-100 text-insurBlue-700 text-sm font-medium mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Shield className="h-4 w-4 mr-2" />
            <span>Insurance Reimagined with Blockchain</span>
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-insurBlue-600">Transparent</span> Insurance on the Blockchain
          </h1>
          
          <p 
            className={`text-xl text-gray-600 mb-8 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'
            }`}
          >
            Say goodbye to complex claims and hidden terms. InsureChain leverages blockchain technology to create transparent, efficient, and user-centric insurance solutions.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Button className="px-8 py-6 text-lg bg-insurBlue-600 hover:bg-insurBlue-700">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="px-8 py-6 text-lg border-insurBlue-200 text-insurBlue-700 hover:bg-insurBlue-50">
              Learn More
            </Button>
          </div>
        </div>
        
        <div 
          className={`mt-16 max-w-4xl mx-auto glass p-1 rounded-2xl overflow-hidden transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-insurBlue-50 to-blue-50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                  <Shield className="h-10 w-10 text-insurBlue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Interactive Demo Coming Soon</h3>
                <p className="text-gray-600 mt-2">Experience the future of insurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
