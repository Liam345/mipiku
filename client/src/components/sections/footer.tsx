import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import mipikuLogo from "@assets/Mi_piku600_200 (1)_1751782879375.jpg";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src={mipikuLogo} 
                alt="Mi Piku Logo" 
                className="h-12 w-auto rounded-xl"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating magical moments through premium plush toys and curated gift boxes. 
              Where softness meets joy, and dreams come to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mipikukids/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-coral rounded-full flex items-center justify-center hover:bg-coral/80 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-mint rounded-full flex items-center justify-center hover:bg-mint/80 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-lavender rounded-full flex items-center justify-center hover:bg-lavender/80 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-teal rounded-full flex items-center justify-center hover:bg-teal/80 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-coral transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-coral transition-colors duration-300"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('wholesale')}
                  className="text-gray-300 hover:text-coral transition-colors duration-300"
                >
                  Wholesale
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-coral transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-coral transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="text-coral mr-3 h-5 w-5" />
                <span className="text-gray-300">wholesale@mipiku.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-mint mr-3 h-5 w-5" />
                <span className="text-gray-300">+1 (555) 123-PIKU</span>
              </li>
              <li className="flex items-center">
                <MapPin className="text-lavender mr-3 h-5 w-5" />
                <span className="text-gray-300">123 Toy Lane, Plush City, PC 12345</span>
              </li>
              <li className="flex items-center">
                <Clock className="text-teal mr-3 h-5 w-5" />
                <span className="text-gray-300">Mon-Fri: 9AM-6PM EST</span>
              </li>
            </ul>
          </div> */}
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mi Piku. All rights reserved. Bringing joy to children worldwide.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-coral transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-coral transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-coral transition-colors duration-300 text-sm">Wholesale Terms</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
