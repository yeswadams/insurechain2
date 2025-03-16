
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Martinez",
      role: "Auto Insurance Client",
      rating: 5,
      text: "Filing a claim used to be a nightmare. With InsureChain, it's automatic. I had my funds within minutes of submitting the required documentation. No more waiting for days or chasing agents."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      text: "The transparency of seeing my policy on the blockchain gives me peace of mind. I know exactly what I'm covered for, and the smart contract ensures I'll be paid without arguments or delays."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Crypto Investor",
      rating: 4,
      text: "As someone deeply invested in crypto, finding insurance for my digital assets was challenging until I found InsureChain. The coverage is comprehensive and the premiums are reasonable."
    },
    {
      id: 4,
      name: "Emily Wilson",
      role: "Small Business Owner",
      rating: 5,
      text: "The lower premiums from removing intermediaries made quality business insurance finally affordable for my startup. The verification process was simple and respectful of my data privacy."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-insurBlue-50 border border-insurBlue-100 text-insurBlue-700 text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            <span>User Experiences</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Customers Say
          </h2>
          
          <p className="text-xl text-gray-600">
            People are already experiencing the benefits of blockchain-powered insurance with InsureChain.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            <div className="absolute -top-6 -left-4 text-insurBlue-300 opacity-30">
              <Quote className="h-24 w-24" />
            </div>
            
            <div className="relative z-10">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              
              <p className="text-xl text-gray-700 italic mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col">
                <span className="font-bold text-lg">{testimonials[currentIndex].name}</span>
                <span className="text-gray-500">{testimonials[currentIndex].role}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-insurBlue-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-insurBlue-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-insurBlue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
