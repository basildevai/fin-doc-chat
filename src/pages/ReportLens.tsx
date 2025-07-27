import { useState } from "react";
import NavBar from "@/components/NavBar";
import UploadBox from "@/components/UploadBox";
import { Button } from "@/components/ui/button";
import { Moon, Sun, User } from "lucide-react";

const ReportLens = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [question, setQuestion] = useState("");

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    console.log("File uploaded:", file.name);
    // TODO: Redirect to dashboard or process file
  };

  const handleQuestionSubmit = (questionText: string) => {
    setQuestion(questionText);
    console.log("Question submitted:", questionText);
    // TODO: Process question with AI
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-finance-navy">
                ReportLens
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle (placeholder) */}
              <Button variant="ghost" size="sm" className="text-finance-gray hover:text-finance-teal">
                <Sun className="h-5 w-5" />
              </Button>
              
              {/* User Menu */}
              <Button variant="ghost" size="sm" className="text-finance-gray hover:text-finance-teal">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-finance-navy mb-6">
            AI-Powered Financial Analysis
          </h1>
          <p className="text-xl text-finance-gray-light max-w-3xl mx-auto">
            Upload your financial reports and get instant insights, summaries, and answers to your questions.
          </p>
        </div>

        <UploadBox
          onFileUpload={handleFileUpload}
          onQuestionSubmit={handleQuestionSubmit}
        />

        {/* Quick Tips */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-finance-navy mb-6 text-center">
            Quick Tips for Better Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-card/50 border border-border">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-medium text-finance-navy mb-2">Upload Quality Files</h4>
              <p className="text-sm text-finance-gray-light">
                Ensure your PDFs are text-searchable and Excel files are well-formatted
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card/50 border border-border">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="font-medium text-finance-navy mb-2">Ask Specific Questions</h4>
              <p className="text-sm text-finance-gray-light">
                Be specific about metrics, time periods, or sections you want to analyze
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card/50 border border-border">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-medium text-finance-navy mb-2">Review Page References</h4>
              <p className="text-sm text-finance-gray-light">
                Check the page references in AI responses to verify information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportLens;