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
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Plush teddy bear with bowtie" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Stuffed animal family" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Plush unicorn toy" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
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
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Baby gift box with satin ribbon" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Pastel gift packaging" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Premium gift box set" 
                className="rounded-3xl shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
              
              <img 
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
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
