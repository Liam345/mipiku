import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/wholesale-inquiry", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.company || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    submitInquiry.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-mint/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Start Your <span className="text-coral">Partnership</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ready to bring Mi Piku to your customers? Let's discuss how we can grow together.
          </p>
        </div>
        
        <div className="bg-white rounded-4xl shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-coral">*</span>
                </Label>
                <Input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-coral focus:outline-none transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name <span className="text-coral">*</span>
                </Label>
                <Input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-coral focus:outline-none transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-coral">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-coral focus:outline-none transition-colors duration-200"
                  placeholder="your@company.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-coral focus:outline-none transition-colors duration-200"
                  placeholder="+61 0451 123 456"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-coral">*</span>
              </Label>
              <Textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-coral focus:outline-none transition-colors duration-200 resize-none"
                placeholder="Tell us about your business, location, and wholesale needs..."
              />
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                disabled={submitInquiry.isPending}
                style={{ backgroundColor: '#FF7F50', color: 'white' }}
                className="px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-200 shadow-xl text-lg h-auto"
              >
                <Send className="mr-2 h-5 w-5" />
                {submitInquiry.isPending ? "Sending..." : "Send Wholesale Inquiry"}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                We'll respond to your inquiry within 24 hours during business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
