import React from 'react'

const MessageBubble = ({type, text}) => {
    const isUser = type === "user";
    
  return (
    <div className={`flex ${isUser ? "justify-end":"justify-start"}`}>
        <div className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${isUser ? "bg-blue-500 text-white":"bg-gray-200 text-black"}`}>{text}</div>
    </div>
  )
}

export default MessageBubble