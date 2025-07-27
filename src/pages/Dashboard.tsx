import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentChatId, setCurrentChatId] = useState("1");
  const [selectedFile, setSelectedFile] = useState({
    name: "TATASTEEL_Q4_2024.pdf",
    metadata: {
      size: "2.4 MB",
      pages: 45,
      type: "PDF"
    }
  });

  const handleNewChat = () => {
    console.log("Starting new chat");
    // TODO: Create new chat session
  };

  const handleSelectChat = (chatId: string) => {
    setCurrentChatId(chatId);
    console.log("Selected chat:", chatId);
    // TODO: Load chat history
  };

  const handleLogout = () => {
    console.log("Logging out");
    // TODO: Handle logout
    window.location.href = "/";
  };

  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
    // TODO: Send message to AI and get response
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen bg-background overflow-hidden">
      <div className="flex h-full">
        <Sidebar
          currentChatId={currentChatId}
          onNewChat={handleNewChat}
          onSelectChat={handleSelectChat}
          onLogout={handleLogout}
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
        />
        
        <ChatWindow
          fileName={selectedFile.name}
          fileMetadata={selectedFile.metadata}
          onSendMessage={handleSendMessage}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default Dashboard;