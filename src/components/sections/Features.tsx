
import { 
  Shield, 
  Lock, 
  CreditCard, 
  Clock, 
  FileText, 
  Zap 
} from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const Features = () => {
  const features = [
    {
      title: "Smart Contract Security",
      description: "Policies and claims backed by tamper-proof smart contracts for guaranteed execution and payment.",
      icon: <Shield className="h-6 w-6" />,
      delay: 0.1
    },
    {
      title: "Data Privacy",
      description: "Control exactly what data you share while maintaining privacy through cryptographic technology.",
      icon: <Lock className="h-6 w-6" />,
      delay: 0.2
    },
    {
      title: "Instant Payments",
      description: "Claim settlements processed automatically through the blockchain for instant payouts.",
      icon: <CreditCard className="h-6 w-6" />,
      delay: 0.3
    },
    {
      title: "24/7 Availability",
      description: "Blockchain never sleeps. Access your insurance information and file claims anytime.",
      icon: <Clock className="h-6 w-6" />,
      delay: 0.4
    },
    {
      title: "Transparent Terms",
      description: "All policy terms stored on the blockchain for complete transparency and auditability.",
      icon: <FileText className="h-6 w-6" />,
      delay: 0.5
    },
    {
      title: "Lower Costs",
      description: "Reduced overhead and intermediaries mean lower premiums and better coverage for you.",
      icon: <Zap className="h-6 w-6" />,
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-insurBlue-50 border border-insurBlue-100 text-insurBlue-700 text-sm font-medium mb-4">
            <Zap className="h-4 w-4 mr-2" />
            <span>Key Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Insurance for the Digital Age
          </h2>
          
          <p className="text-xl text-gray-600">
            We're combining the power of blockchain with traditional insurance principles to create a more efficient, transparent, and user-friendly experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
