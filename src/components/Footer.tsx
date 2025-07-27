import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-finance-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Stocks Labs AI</h3>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Empowering retail investors with AI-powered financial report analysis. 
              Make informed decisions faster with our intelligent insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-finance-teal-light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/reportlens" className="text-gray-300 hover:text-finance-teal-light transition-colors">
                  ReportLens
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-finance-teal-light transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-finance-teal-light transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-finance-teal-light transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-finance-teal-light transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-finance-navy-light flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Stocks Labs AI. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-gray-300 hover:text-finance-teal-light transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-finance-teal-light transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;