import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, File, X } from "lucide-react";

interface UploadBoxProps {
  onFileUpload?: (file: File) => void;
  onQuestionSubmit?: (question: string) => void;
}

const UploadBox = ({ onFileUpload, onQuestionSubmit }: UploadBoxProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [question, setQuestion] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel'
    ];

    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF, DOCX, or Excel file.');
      return;
    }

    // Validate file size (50MB)
    if (file.size > 50 * 1024 * 1024) {
      alert('File size must be less than 50MB.');
      return;
    }

    setUploadedFile(file);
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      onFileUpload?.(file);
    }, 2000);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onQuestionSubmit?.(question);
      setQuestion("");
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Upload Section */}
      <Card className="border-2 border-dashed border-border hover:border-finance-teal transition-colors">
        <CardContent className="p-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-finance-navy mb-2">
              Upload Your Financial Report
            </h2>
            <p className="text-finance-gray-light mb-8">
              PDF, DOCX, or Excel – Max 50MB
            </p>

            {!uploadedFile ? (
              <div
                className={`border-2 border-dashed rounded-lg p-12 transition-colors ${
                  isDragOver
                    ? 'border-finance-teal bg-finance-teal/5'
                    : 'border-border hover:border-finance-teal/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="h-16 w-16 text-finance-teal mx-auto mb-4" />
                <p className="text-lg text-finance-gray mb-4">
                  Drag and drop your file here, or
                </p>
                <Button
                  variant="hero"
                  onClick={() => fileInputRef.current?.click()}
                  className="mb-4"
                >
                  Choose File
                </Button>
                <p className="text-sm text-finance-gray-light">
                  Supported formats: PDF, DOCX, XLSX, XLS
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.docx,.xlsx,.xls"
                  onChange={handleFileInputChange}
                />
              </div>
            ) : (
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <File className="h-12 w-12 text-finance-teal" />
                    <div className="text-left">
                      <p className="font-medium text-finance-navy">{uploadedFile.name}</p>
                      <p className="text-sm text-finance-gray-light">
                        {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="text-destructive hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                {isUploading && (
                  <div className="mt-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-finance-teal h-2 rounded-full animate-pulse w-2/3"></div>
                    </div>
                    <p className="text-sm text-finance-gray-light mt-2">Uploading and processing...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Question Input */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8">
          <form onSubmit={handleQuestionSubmit}>
            <label htmlFor="question" className="block text-lg font-medium text-finance-navy mb-4">
              Ask AI about your report...
            </label>
            <div className="flex gap-4">
              <Input
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., What were the main revenue drivers in Q4?"
                className="flex-1 text-base py-3"
                disabled={!uploadedFile || isUploading}
              />
              <Button
                type="submit"
                variant="hero"
                disabled={!question.trim() || !uploadedFile || isUploading}
                className="px-8"
              >
                Ask AI
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadBox;