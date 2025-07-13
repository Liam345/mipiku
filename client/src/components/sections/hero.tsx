import { Button } from "@/components/ui/button";
import { Handshake, Gift } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-mint/20 via-lavender/10 to-sunny/20 py-20 overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-mint/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-sunny/20 rounded-full blur-2xl animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-lavender/30 rounded-full blur-xl animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-5xl lg:text-7xl text-gray-800 mb-6 leading-tight">
              Where <span className="text-coral">Softness</span> 
              {" "}Meets <span className="text-teal">Joy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Premium plush toys and curated gift boxes designed to create magical moments for little ones. 
              Partner with Mi Piku for wholesale excellence in children's comfort and joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('wholesale')}
                style={{ backgroundColor: '#FF7F50', color: 'white' }}
                className="px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-200 shadow-xl text-lg h-auto"
              >
                <Handshake className="mr-2 h-5 w-5" />
                Start Wholesale Partnership
              </Button>
              <Button 
                onClick={() => scrollToSection('products')}
                variant="outline"
                className="border-2 border-teal text-teal px-8 py-4 rounded-full font-semibold hover:bg-teal hover:text-white transition-all duration-300 text-lg h-auto"
              >
                <Gift className="mr-2 h-5 w-5" />
                View Our Collection
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Hero image collage */}
            <div className="grid grid-cols-2 gap-4">
              {/* Stock photos - cute plush teddy bears */}
              <img
                src="/toys/dog.jpeg"
                alt="Cute plush teddy bear" 
                className="rounded-4xl shadow-2xl w-full h-48 object-cover transform rotate-3 hover:rotate-0 transition-transform duration-300" 
              />
              
              {/* Baby gift boxes packaging */}
              <img
                src="/toys/narwhal.jpeg"
                alt="Baby gift box packaging" 
                className="rounded-4xl shadow-2xl w-full h-48 object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8" 
              />
              
              {/* Happy babies with toys */}
              <img 
                src="/toys/penguin.jpeg" 
                alt="Happy baby with toys" 
                className="rounded-4xl shadow-2xl w-full h-48 object-cover transform rotate-1 hover:rotate-0 transition-transform duration-300 -mt-4" 
              />
              
              {/* Soft plush animals arranged beautifully */}
              <img 
                src="/toys/turtle.jpeg" 
                alt="Plush toy collection" 
                className="rounded-4xl shadow-2xl w-full h-48 object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300 mt-4" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
