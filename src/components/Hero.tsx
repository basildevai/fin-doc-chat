import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Financial Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-finance-navy/90 to-finance-navy/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Understand Company
            <span className="block text-finance-teal-light">
              Financials in Seconds
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload financial reports and get AI-powered summaries and answers instantly.
            Transform complex data into actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="text-lg px-8 py-4 h-auto"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="finance-outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-finance-navy"
              onClick={() => scrollToSection("services")}
            >
              Learn More
            </Button>
          </div>

          {/* Stats or trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-finance-teal-light mb-2">50MB+</div>
              <div className="text-gray-300">Max File Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-finance-teal-light mb-2">3 Formats</div>
              <div className="text-gray-300">PDF, DOCX, Excel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-finance-teal-light mb-2">AI-Powered</div>
              <div className="text-gray-300">Smart Analysis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;