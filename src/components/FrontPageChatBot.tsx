import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User, Minimize2 } from "lucide-react";

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: string;
}

const FrontPageChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      content: "Hi! I'm here to help you learn about Stocks Labs AI. Ask me about our features, pricing, or how to get started!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Mock responses for common questions
  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return "Our pricing is designed to be affordable for retail investors. We offer flexible plans starting from basic document analysis. Would you like me to connect you with our sales team for detailed pricing?";
    }
    
    if (message.includes('how') && (message.includes('work') || message.includes('use'))) {
      return "It's simple! Just upload your financial reports (PDF, DOCX, or Excel), and our AI will analyze them instantly. You can then ask specific questions about the data and get answers with page references. Try our demo at /reportlens!";
    }
    
    if (message.includes('file') || message.includes('format') || message.includes('upload')) {
      return "We support PDF, DOCX, and Excel files up to 50MB. Our AI can parse annual reports, quarterly results, financial statements, and more. The files should be text-searchable for best results.";
    }
    
    if (message.includes('ai') || message.includes('technology')) {
      return "We use advanced language models specifically trained for financial analysis. Our AI can understand complex financial terminology, extract key metrics, and provide contextual answers with source citations.";
    }
    
    if (message.includes('security') || message.includes('safe') || message.includes('privacy')) {
      return "Security is our top priority. All documents are encrypted in transit and at rest. We don't store your files permanently and follow strict data privacy protocols. Your financial data remains confidential.";
    }
    
    if (message.includes('demo') || message.includes('try') || message.includes('test')) {
      return "Absolutely! You can try our platform right now. Click 'Get Started' or visit our ReportLens page to upload a sample financial report and see the AI in action.";
    }
    
    if (message.includes('contact') || message.includes('support') || message.includes('help')) {
      return "You can reach our support team at rohan@stockslabs.ai or through the contact form on this page. We're based in Bangalore, India and typically respond within a few hours.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to Stocks Labs AI. I'm here to answer any questions about our AI-powered financial analysis platform. What would you like to know?";
    }
    
    // Default response
    return "That's a great question! I'd be happy to help you learn more about Stocks Labs AI. You can also reach our team directly at rohan@stockslabs.ai or try our platform at /reportlens. Is there anything specific about our AI financial analysis you'd like to know?";
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          variant="hero"
          size="lg"
          className="rounded-full w-16 h-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl border-0 bg-card/95 backdrop-blur-sm transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
        {/* Header */}
        <CardHeader className="p-4 bg-finance-navy text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-finance-teal rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <CardTitle className="text-sm font-medium">Stocks Labs AI Assistant</CardTitle>
                <p className="text-xs text-gray-300">Usually responds in a few minutes</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[436px]">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-2`}>
                      {/* Avatar */}
                      <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                        ${message.type === 'user' ? 'bg-finance-navy' : 'bg-finance-teal'}
                      `}>
                        {message.type === 'user' ? (
                          <User className="h-3 w-3 text-white" />
                        ) : (
                          <Bot className="h-3 w-3 text-white" />
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div className={`
                        rounded-lg p-3 shadow-sm text-sm
                        ${message.type === 'user' 
                          ? 'bg-finance-navy text-white' 
                          : 'bg-muted border border-border text-finance-gray'
                        }
                      `}>
                        <p className="leading-relaxed">{message.content}</p>
                        <p className={`
                          text-xs mt-1
                          ${message.type === 'user' ? 'text-white/70' : 'text-finance-gray-light'}
                        `}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-finance-teal flex items-center justify-center">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-muted border border-border rounded-lg p-3">
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
            <div className="p-4 border-t border-border">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about our AI platform..."
                  className="flex-1 text-sm"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="sm"
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default FrontPageChatBot;