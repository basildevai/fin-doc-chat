import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, Upload, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-finance-teal" />,
      title: "AI Report Summarization",
      description: "Get comprehensive summaries of complex financial reports in seconds. Our AI identifies key metrics, trends, and insights."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-finance-teal" />,
      title: "Financial Q&A with Chatbot",
      description: "Ask specific questions about your reports and get instant, accurate answers with page references and context."
    },
    {
      icon: <Upload className="h-12 w-12 text-finance-teal" />,
      title: "Document Upload & Smart Parsing",
      description: "Upload PDFs, DOCX, and Excel files. Our smart parser extracts and organizes all relevant financial data."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-finance-teal" />,
      title: "Investor Dashboard with Chat History",
      description: "Track your analysis history, save important insights, and build your own financial research library."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-finance-navy mb-6">
            Powerful Features for Smart Investors
          </h2>
          <p className="text-xl text-finance-gray-light max-w-3xl mx-auto">
            Transform the way you analyze financial reports with our comprehensive AI-powered toolkit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-finance-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-finance-gray-light leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;