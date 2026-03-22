import { useEffect, useState } from "react";
import { useChat } from "../hooks/useChat";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  const [collapsed, setCollapsed] = useState(false);

  const { initializeSocketConnection } = useChat();

  function handleToggle(){
    setCollapsed((s) => !s)
  }

  useEffect(() => {
    initializeSocketConnection();
  }, []);

  return (
    <div className="min-h-screen bg-[#171615] text-gray-300 flex">
      <Sidebar collapsed={collapsed} onToggle={handleToggle} />
      <MainContent collapsed={collapsed} onToggle={handleToggle}/>
    </div>
  );
};

export default Dashboard;

