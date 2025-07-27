import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, MessageSquare, LogOut, Menu, X } from "lucide-react";

interface ChatSession {
  id: string;
  title: string;
  timestamp: string;
}

interface SidebarProps {
  chatSessions?: ChatSession[];
  currentChatId?: string;
  onNewChat?: () => void;
  onSelectChat?: (chatId: string) => void;
  onLogout?: () => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ 
  chatSessions = [], 
  currentChatId, 
  onNewChat, 
  onSelectChat, 
  onLogout,
  isOpen = true,
  onToggle 
}: SidebarProps) => {
  const mockSessions: ChatSession[] = chatSessions.length > 0 ? chatSessions : [
    { id: "1", title: "TATASTEEL Q4 2024", timestamp: "2 hours ago" },
    { id: "2", title: "Reliance Annual Report", timestamp: "1 day ago" },
    { id: "3", title: "HDFC Bank Q3 Results", timestamp: "3 days ago" },
    { id: "4", title: "Infosys Quarterly", timestamp: "1 week ago" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="finance"
          size="sm"
          onClick={onToggle}
          className="p-2"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 
        w-80 bg-card border-r border-border 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${!isOpen ? 'lg:w-0 lg:overflow-hidden' : ''}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-bold text-finance-navy mb-4">ReportLens</h2>
            <Button 
              variant="hero" 
              className="w-full"
              onClick={onNewChat}
            >
              <Plus className="h-4 w-4 mr-2" />
              New Chat
            </Button>
          </div>

          {/* Chat Sessions */}
          <div className="flex-1 p-4">
            <h3 className="text-sm font-medium text-finance-gray mb-4 uppercase tracking-wide">
              Recent Chats
            </h3>
            <ScrollArea className="h-full">
              <div className="space-y-2">
                {mockSessions.map((session) => (
                  <button
                    key={session.id}
                    onClick={() => onSelectChat?.(session.id)}
                    className={`
                      w-full text-left p-3 rounded-lg transition-colors
                      hover:bg-muted group
                      ${currentChatId === session.id ? 'bg-finance-teal/10 border border-finance-teal/20' : ''}
                    `}
                  >
                    <div className="flex items-start space-x-3">
                      <MessageSquare className={`
                        h-4 w-4 mt-1 flex-shrink-0
                        ${currentChatId === session.id ? 'text-finance-teal' : 'text-finance-gray-light'}
                      `} />
                      <div className="min-w-0 flex-1">
                        <p className={`
                          text-sm font-medium truncate
                          ${currentChatId === session.id ? 'text-finance-teal' : 'text-finance-gray'}
                        `}>
                          {session.title}
                        </p>
                        <p className="text-xs text-finance-gray-light mt-1">
                          {session.timestamp}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Button 
              variant="finance-outline" 
              className="w-full"
              onClick={onLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-background/80 backdrop-blur-sm"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;