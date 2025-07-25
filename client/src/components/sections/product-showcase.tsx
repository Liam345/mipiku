import { CheckCircle } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-mint/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Our <span className="text-teal">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated range of plush toys and gift sets, designed to delight children and trusted by wholesale partners worldwide.
          </p>
        </div>
        
        {/* Product Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Plush Toys Section */}
          <div className="bg-white rounded-4xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-3xl text-gray-800 mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-lavender">Plush Toys</span>
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Cute plush teddy bears */}
              <img 
                src="/toys/dog.jpeg" 
                alt="Plush teddy bear with bowtie" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="/toys/zebra.jpeg" 
                alt="Stuffed animal family" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="/toys/narwhal.jpeg" 
                alt="Plush unicorn toy" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="/toys/seal.jpeg" 
                alt="Colorful plush toy collection" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="text-mint mr-2 h-5 w-5" />
                Ultra-soft premium materials
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-mint mr-2 h-5 w-5" />
                Safety certified for all ages
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-mint mr-2 h-5 w-5" />
                Kawaii-inspired designs
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-mint mr-2 h-5 w-5" />
                Machine washable
              </li>
            </ul>
          </div>
          
          {/* Gift Boxes Section */}
          <div className="bg-white rounded-4xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-3xl text-gray-800 mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-sunny">Gift Boxes</span>
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Baby gift boxes packaging */}
              <img 
                src="/toys/sheep.jpeg" 
                alt="Baby gift box with satin ribbon" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="/toys/owl.jpeg" 
                alt="Pastel gift packaging" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="/toys/otter.jpeg" 
                alt="Premium gift box set" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="/toys/penguin.jpeg" 
                alt="Curated baby gift collection" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="text-teal mr-2 h-5 w-5" />
                Curated themed collections
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-teal mr-2 h-5 w-5" />
                Premium packaging design
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-teal mr-2 h-5 w-5" />
                Perfect for gifting
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-teal mr-2 h-5 w-5" />
                Wholesale-ready presentation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
