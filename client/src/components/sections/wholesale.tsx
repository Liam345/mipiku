import { Percent, Truck, Headphones, Shield } from "lucide-react";

export default function Wholesale() {
  return (
    <section id="wholesale" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-olive">Wholesale</span> Partnership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing network of retail partners and bring Mi Piku's magic to your customers. We provide the support, quality, and service your business deserves.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-bold text-3xl text-gray-800 mb-8">Why Choose Mi Piku Wholesale?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-coral to-sunny rounded-full flex items-center justify-center flex-shrink-0">
                  <Percent className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Competitive Pricing</h4>
                  <p className="text-gray-600">Volume-based pricing tiers with attractive margins for your retail business.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-mint to-teal rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Fast & Reliable Shipping</h4>
                  <p className="text-gray-600">Quick turnaround times and reliable delivery to keep your inventory stocked.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-lavender to-olive rounded-full flex items-center justify-center flex-shrink-0">
                  <Headphones className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Dedicated Support</h4>
                  <p className="text-gray-600">Personal account management and marketing support to help your business grow.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-sunny to-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Quality Guarantee</h4>
                  <p className="text-gray-600">Every product backed by our quality promise and comprehensive return policy.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Wholesale trade fair display */}
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
              alt="Trade fair display booth" 
              className="rounded-4xl shadow-lg w-full h-48 object-cover" 
            />
            
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
              alt="Professional product presentation" 
              className="rounded-4xl shadow-lg w-full h-48 object-cover mt-8" 
            />
            
            <img 
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
              alt="Wholesale packaging logistics" 
              className="rounded-4xl shadow-lg w-full h-48 object-cover -mt-4" 
            />
            
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
              alt="Business partnership" 
              className="rounded-4xl shadow-lg w-full h-48 object-cover mt-4" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
