
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface InsuranceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  price?: string;
  popular?: boolean;
  onClick?: () => void;
}

const InsuranceCard = ({ 
  title, 
  description, 
  icon, 
  price, 
  popular = false,
  onClick 
}: InsuranceCardProps) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 h-full
        ${popular 
          ? 'glass border-insurBlue-200 shadow-lg shadow-insurBlue-100/50 scale-105 z-10 hover:shadow-xl hover:shadow-insurBlue-100/50' 
          : 'glass hover:shadow-md hover:-translate-y-1'
        }
      `}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-insurBlue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
        </div>
      )}
      
      <div className="p-6 flex flex-col h-full">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
          popular ? 'bg-insurBlue-100 text-insurBlue-600' : 'bg-gray-100 text-gray-700'
        }`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        {price && (
          <div className="mb-4">
            <div className="flex items-end">
              <span className="text-3xl font-bold">{price}</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
          </div>
        )}
        
        <Button
          onClick={onClick}
          className={`mt-2 w-full justify-between ${
            popular 
              ? 'bg-insurBlue-600 text-white hover:bg-insurBlue-700' 
              : 'bg-white text-insurBlue-600 border border-insurBlue-200 hover:bg-insurBlue-50'
          }`}
        >
          Learn More
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default InsuranceCard;
