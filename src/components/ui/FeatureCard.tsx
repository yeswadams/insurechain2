
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="p-6 glass rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      style={{ 
        opacity: 0,
        animation: `fade-in-up 0.5s ease-out ${delay}s forwards`
      }}
    >
      <div className="w-12 h-12 rounded-full bg-insurBlue-100 text-insurBlue-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
