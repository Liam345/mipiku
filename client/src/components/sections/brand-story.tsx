import { Heart, Award, Lightbulb } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Our <span className="text-coral">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from a passion for creating joy, Mi Piku combines premium quality with playful design to bring smiles to children worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-mint/20 to-teal/10 p-8 rounded-4xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* <div className="w-16 h-16 bg-gradient-to-r from-mint to-teal rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="text-white text-2xl h-8 w-8" />
            </div> */}
            <h3 className="font-bold text-2xl text-gray-800 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To create premium plush companions that spark imagination, comfort, and endless joy in every child's life through thoughtfully designed, safe, and lovable toys.
            </p>
          </div>
          
          {/* Quality Card */}
          <div className="bg-gradient-to-br from-lavender/20 to-sunny/10 p-8 rounded-4xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* <div className="w-16 h-16 bg-gradient-to-r from-lavender to-sunny rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award className="text-white text-2xl h-8 w-8" />
            </div> */}
            <h3 className="font-bold text-2xl text-gray-800 mb-4 text-center">Premium Quality</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Every Mi Piku product meets the highest safety standards with ultra-soft materials, durable construction, and meticulous attention to detail that parents trust.
            </p>
          </div>
          
          {/* Innovation Card */}
          <div className="bg-gradient-to-br from-coral/20 to-olive/10 p-8 rounded-4xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* <div className="w-16 h-16 bg-gradient-to-r from-coral to-olive rounded-full flex items-center justify-center mb-6 mx-auto">
              <Lightbulb className="text-white text-2xl h-8 w-8" />
            </div> */}
            <h3 className="font-bold text-2xl text-gray-800 mb-4 text-center">Playful Innovation</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Our designs blend traditional craftsmanship with modern aesthetics, creating unique characters that become cherished childhood memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
