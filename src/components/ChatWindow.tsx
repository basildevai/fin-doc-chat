import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot, User, HelpCircle } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
  pageReferences?: string[];
}

interface ChatWindowProps {
  fileName?: string;
  fileMetadata?: {
    size: string;
    pages?: number;
    type: string;
  };
  messages?: Message[];
  onSendMessage?: (message: string) => void;
  isLoading?: boolean;
}

const ChatWindow = ({ 
  fileName, 
  fileMetadata, 
  messages = [], 
  onSendMessage,
  isLoading = false 
}: ChatWindowProps) => {
  const [inputMessage, setInputMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const mockMessages: Message[] = messages.length > 0 ? messages : [
    {
      id: "1",
      type: "ai",
      content: "Hello! I've analyzed your financial report. I can help you understand key metrics, trends, and specific details. What would you like to know?",
      timestamp: "10:30 AM",
    },
    {
      id: "2", 
      type: "user",
      content: "What were the main revenue drivers in Q4?",
      timestamp: "10:31 AM",
    },
    {
      id: "3",
      type: "ai", 
      content: "Based on the Q4 report, the main revenue drivers were:\n\n1. **Steel Production**: 25% increase in crude steel production reaching 4.2 million tonnes\n2. **Export Sales**: Strong demand from European markets contributed ₹2,400 crores\n3. **Mining Operations**: Iron ore sales increased by 18% year-over-year\n\nThese details can be found on pages 12-15 of your report.",
      timestamp: "10:31 AM",
      pageReferences: ["Page 12", "Page 13", "Page 14", "Page 15"]
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      onSendMessage?.(inputMessage.trim());
      setInputMessage("");
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [mockMessages, isLoading]);

  if (!fileName) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/20">
        <Card className="max-w-md border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-finance-teal/10 rounded-full flex items-center justify-center">
              <Bot className="h-8 w-8 text-finance-teal" />
            </div>
            <h3 className="text-xl font-semibold text-finance-navy mb-2">
              Upload a financial report to begin
            </h3>
            <p className="text-finance-gray-light">
              Once you upload a document, I'll analyze it and we can start our conversation about your financial data.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* File Header */}
      <div className="p-6 border-b border-border bg-card/50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-finance-navy">{fileName}</h2>
            {fileMetadata && (
              <p className="text-sm text-finance-gray-light mt-1">
                {fileMetadata.type} • {fileMetadata.size}
                {fileMetadata.pages && ` • ${fileMetadata.pages} pages`}
              </p>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowHelp(!showHelp)}
            className="text-finance-teal hover:text-finance-teal"
          >
            <HelpCircle className="h-4 w-4" />
          </Button>
        </div>
        
        {showHelp && (
          <div className="mt-4 p-4 bg-finance-teal/5 rounded-lg border border-finance-teal/20">
            <h4 className="font-medium text-finance-navy mb-2">How to ask better questions:</h4>
            <ul className="text-sm text-finance-gray-light space-y-1">
              <li>• "What were the main revenue streams?"</li>
              <li>• "Show me the profit margins for Q4"</li>
              <li>• "Compare this year's performance to last year"</li>
              <li>• "What are the key risks mentioned?"</li>
            </ul>
          </div>
        )}
      </div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
        <div className="space-y-6 max-w-4xl">
          {mockMessages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                {/* Avatar */}
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                  ${message.type === 'user' ? 'bg-finance-navy' : 'bg-finance-teal'}
                `}>
                  {message.type === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`
                  rounded-lg p-4 shadow-sm
                  ${message.type === 'user' 
                    ? 'bg-finance-navy text-white' 
                    : 'bg-card border border-border'
                  }
                `}>
                  <p className={`
                    text-sm leading-relaxed whitespace-pre-line
                    ${message.type === 'user' ? 'text-white' : 'text-finance-gray'}
                  `}>
                    {message.content}
                  </p>
                  
                  {/* Page References */}
                  {message.pageReferences && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-xs text-finance-gray-light mb-2">Referenced pages:</p>
                      <div className="flex flex-wrap gap-1">
                        {message.pageReferences.map((page, index) => (
                          <span 
                            key={index}
                            className="text-xs px-2 py-1 bg-finance-teal/10 text-finance-teal rounded"
                          >
                            {page}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <p className={`
                    text-xs mt-2
                    ${message.type === 'user' ? 'text-white/70' : 'text-finance-gray-light'}
                  `}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-finance-teal flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-finance-teal rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-finance-teal rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-finance-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Form */}
      <div className="p-6 border-t border-border bg-card/50">
        <form onSubmit={handleSendMessage} className="flex gap-4">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask a question about your financial report..."
            className="flex-1 text-base py-3"
            disabled={isLoading}
          />
          <Button
            type="submit"
            variant="hero"
            disabled={!inputMessage.trim() || isLoading}
            className="px-6"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          variant="hero"
          size="sm"
          className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl"
          onClick={() => setShowHelp(!showHelp)}
        >
          <HelpCircle className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatWindow;