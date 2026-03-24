import { useEffect } from "react";
import { useChat } from "../hooks/useChat";
import { useSelector } from "react-redux";
import ChatLayout from "../components/ChatLayout";



const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  const { initializeSocketConnection } = useChat();

  useEffect(() => {
    initializeSocketConnection();
  }, []);

  return (
    <div className="h-screen w-full bg-[#171615] text-gray-300 flex">
      <ChatLayout/>
    </div>
  );
};

export default Dashboard;
