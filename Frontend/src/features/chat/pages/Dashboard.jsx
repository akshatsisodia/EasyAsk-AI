import { useEffect } from "react";
import { useChat } from "../hooks/useChat";
import { useSelector } from "react-redux";

const Dashboard = () => {

  const user = useSelector(state=> state.auth.user);

  const { initializeSocketConnection } = useChat();

  useEffect(()=>{
    initializeSocketConnection();
  },[])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard