import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import mipikuLogo from "@assets/Mi_piku600_200 (1)_1751782879375.jpg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b-2 border-mint/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img 
                  src={mipikuLogo} 
                  alt="Mi Piku Logo" 
                  className="h-12 w-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-coral transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-coral transition-colors duration-300 font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('wholesale')}
                className="text-gray-700 hover:text-coral transition-colors duration-300 font-medium"
              >
                Wholesale
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-coral transition-colors duration-300 font-medium"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                style={{ backgroundColor: '#FF7F50', color: 'white' }}
                className="px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-200 shadow-lg"
              >
                Contact for Wholesale
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-coral transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-coral transition-colors duration-300 font-medium text-left px-4 py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-coral transition-colors duration-300 font-medium text-left px-4 py-2"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('wholesale')}
                className="text-gray-700 hover:text-coral transition-colors duration-300 font-medium text-left px-4 py-2"
              >
                Wholesale
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-coral transition-colors duration-300 font-medium text-left px-4 py-2"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                style={{ backgroundColor: '#FF7F50', color: 'white' }}
                className="mx-4 rounded-full font-semibold hover:opacity-90 transition-all duration-200"
              >
                Contact for Wholesale
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
