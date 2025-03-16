
import { 
  Wallet, 
  ClipboardList, 
  CheckCircle, 
  FileText 
} from 'lucide-react';
import StepCard from '../ui/StepCard';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Your Wallet",
      description: "Link your Web3 wallet to access our decentralized insurance platform securely.",
      icon: <Wallet className="h-5 w-5" />,
      delay: 0.1
    },
    {
      number: 2,
      title: "Choose Your Coverage",
      description: "Browse our range of insurance products and select the coverage that meets your needs.",
      icon: <ClipboardList className="h-5 w-5" />,
      delay: 0.2
    },
    {
      number: 3,
      title: "Complete Verification",
      description: "Provide required information while maintaining control over your personal data.",
      icon: <CheckCircle className="h-5 w-5" />,
      delay: 0.3
    },
    {
      number: 4,
      title: "Instant Policy Issuance",
      description: "Your policy is created as a smart contract and instantly deployed to the blockchain.",
      icon: <FileText className="h-5 w-5" />,
      delay: 0.4
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-insurBlue-50 border border-insurBlue-100 text-insurBlue-700 text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How InsureChain Works
          </h2>
          
          <p className="text-xl text-gray-600">
            Our blockchain-powered insurance platform makes getting covered and filing claims straightforward and transparent.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={step.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto glass p-6 rounded-2xl">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Automated Claims Processing</h3>
            <p className="text-gray-600 mb-8">
              When you file a claim, our smart contracts automatically verify eligibility and process payments, cutting out intermediaries and reducing settlement time from weeks to minutes.
            </p>
            
            <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-insurBlue-400 to-insurBlue-600 h-full rounded-full" style={{ width: '75%', animation: 'progress 1.5s ease-out' }}></div>
            </div>
            
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-gray-500">Claim Filed</span>
              <span className="text-gray-500">Verification</span>
              <span className="text-gray-500">Processing</span>
              <span className="text-insurBlue-600 font-medium">Payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
