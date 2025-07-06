import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import BrandStory from "@/components/sections/brand-story";
import ProductShowcase from "@/components/sections/product-showcase";
import Wholesale from "@/components/sections/wholesale";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-mint/10">
      <Navigation />
      <Hero />
      <BrandStory />
      <ProductShowcase />
      <Wholesale />
      <ContactForm />
      <Footer />
    </div>
  );
}
