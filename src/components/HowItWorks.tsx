import { Card, CardContent } from "@/components/ui/card";
import { Upload, Zap, MessageCircle, Save } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Upload className="h-8 w-8 text-finance-teal" />,
      title: "Upload your financial report",
      description: "Drag and drop your PDF, DOCX, or Excel file. We support files up to 50MB."
    },
    {
      number: "02", 
      icon: <Zap className="h-8 w-8 text-finance-teal" />,
      title: "AI analyzes and summarizes it",
      description: "Our advanced AI processes your document and extracts key financial insights in seconds."
    },
    {
      number: "03",
      icon: <MessageCircle className="h-8 w-8 text-finance-teal" />,
      title: "Ask questions, get answers with page references",
      description: "Chat with your document. Ask specific questions and get precise answers with source citations."
    },
    {
      number: "04",
      icon: <Save className="h-8 w-8 text-finance-teal" />,
      title: "Review and save key insights",
      description: "Save important findings to your dashboard and build your personal financial research library."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-finance-navy mb-6">
            How It Works
          </h2>
          <p className="text-xl text-finance-gray-light max-w-3xl mx-auto">
            Get from complex financial reports to actionable insights in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-finance-teal/20 mb-4 leading-none">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-3 bg-finance-teal/10 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-finance-navy mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-finance-gray-light leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-finance-teal/30"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-finance-teal/30 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;