import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  isLoggedIn?: boolean;
}

const NavBar = ({ isLoggedIn = false }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-finance-navy">
              Stocks Labs AI
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-finance-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </button>
              <a
                href="/reportlens"
                className="text-foreground hover:text-finance-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                ReportLens
              </a>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-finance-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-finance-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-finance-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <a href="/dashboard" className="text-foreground hover:text-finance-teal transition-colors">
                  Dashboard
                </a>
                <Button variant="finance-outline" size="sm">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <a href="/login" className="text-foreground hover:text-finance-teal transition-colors">
                  Login
                </a>
                <Button variant="hero" size="sm">
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-finance-teal focus:outline-none focus:ring-2 focus:ring-inset focus:ring-finance-teal"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-finance-teal block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
            >
              Home
            </button>
            <a
              href="/reportlens"
              className="text-foreground hover:text-finance-teal block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              ReportLens
            </a>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-finance-teal block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-finance-teal block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-finance-teal block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
            >
              Contact
            </button>
            <div className="pt-4 pb-2">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <a
                    href="/dashboard"
                    className="text-foreground hover:text-finance-teal block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Dashboard
                  </a>
                  <Button variant="finance-outline" size="sm" className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <a
                    href="/login"
                    className="text-foreground hover:text-finance-teal block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Login
                  </a>
                  <Button variant="hero" size="sm" className="w-full">
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;