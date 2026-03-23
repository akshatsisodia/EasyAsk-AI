import { useEffect } from "react";
import { useChat } from "../hooks/useChat";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  const { initializeSocketConnection } = useChat();

  useEffect(() => {
    initializeSocketConnection();
  }, []);

  return (
    <div className="min-h-screen bg-[#171615] text-gray-300 flex">
      <Layout />
    </div>
  );
};

export default Dashboard;
