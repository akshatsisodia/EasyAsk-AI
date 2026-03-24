import { useState } from "react";
import ChatWindow from "./ChatWindow";
import Sidebar from "./Sidebar";
import WelcomeChatPage from "./WelcomeChatPage";

const ChatLayout = () => {

  const [messages, setMessages] = useState(true);

  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="w-70 h-full bg-[#1D1C1B] border-r border-[#4a4a4a] p-3">
        <Sidebar />
      </div>
      <div className="mx-auto max-w-3xl h-full flex-1">
        {messages? <ChatWindow/> : <WelcomeChatPage/>}
      </div>
      
    </div>
  );
};

export default ChatLayout;
