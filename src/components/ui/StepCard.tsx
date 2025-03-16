
import { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

const StepCard = ({ number, title, description, icon, delay = 0 }: StepCardProps) => {
  return (
    <div 
      className="relative p-6 glass rounded-2xl flex"
      style={{ 
        opacity: 0,
        animation: `fade-in-up 0.5s ease-out ${delay}s forwards`
      }}
    >
      <div className="h-10 w-10 rounded-full bg-insurBlue-600 text-white flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
        {number}
      </div>
      
      <div>
        <div className="mb-3 flex items-center">
          <div className="mr-2 text-insurBlue-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
