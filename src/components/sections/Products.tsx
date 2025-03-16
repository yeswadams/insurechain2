
import { Home, Car, Heart, Database, ArrowRight } from 'lucide-react';
import InsuranceCard from '../ui/InsuranceCard';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Products = () => {
  const handleCardClick = (productName: string) => {
    toast({
      title: `${productName} Selected`,
      description: "In a full implementation, this would open detailed product information.",
    });
  };

  return (
    <section id="products" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-insurBlue-50 border border-insurBlue-100 text-insurBlue-700 text-sm font-medium mb-4">
            <Database className="h-4 w-4 mr-2" />
            <span>Our Products</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protection for Every Aspect of Your Life
          </h2>
          
          <p className="text-xl text-gray-600">
            From traditional coverage to crypto-specific protection, our blockchain-based insurance solutions have you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <InsuranceCard
            title="Home Insurance"
            description="Protect your home and belongings with our customizable coverage options."
            icon={<Home className="h-6 w-6" />}
            price="$49"
            onClick={() => handleCardClick("Home Insurance")}
          />
          
          <InsuranceCard
            title="Auto Insurance"
            description="Comprehensive coverage for your vehicle, whether on or off the road."
            icon={<Car className="h-6 w-6" />}
            price="$35"
            popular={true}
            onClick={() => handleCardClick("Auto Insurance")}
          />
          
          <InsuranceCard
            title="Health Insurance"
            description="Healthcare coverage that gives you peace of mind without the paperwork."
            icon={<Heart className="h-6 w-6" />}
            price="$89"
            onClick={() => handleCardClick("Health Insurance")}
          />
          
          <InsuranceCard
            title="Crypto Asset Insurance"
            description="Protection against hacks, theft, and private key loss for your digital assets."
            icon={<Database className="h-6 w-6" />}
            price="$25"
            onClick={() => handleCardClick("Crypto Asset Insurance")}
          />
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="bg-white border-insurBlue-200 text-insurBlue-600 hover:bg-insurBlue-50">
            View All Insurance Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
