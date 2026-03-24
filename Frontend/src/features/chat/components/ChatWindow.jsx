import InputBox from "./InputBox";
import MessageBubble from "./MessageBubble";

const ChatWindow = () => {
  return (
    <div className="h-full flex flex-col rounded-lg">
      {/* Header */}
      <div className="py-2 w-fit border-b">
        <h2 className="text-lg font-semibold">Answer</h2>
      </div>

      {/* Messages Area */}
      <div className="chatMessage h-full flex-1 py-4 overflow-y-auto flex flex-col gap-3 pb-[5vh]">
        {/* Dummy Messages */}
        <MessageBubble type="user" text="Hello!" />
        <MessageBubble type="ai" text="Hi, how can I help you?" />
        <MessageBubble type="user" text="Explain React in simple terms." />
      </div>

      {/* Input */}
      <div className="pb-4 text-center">
        <InputBox />
        <p>AI Models can make mistakes. Check important info.</p>
      </div>
    </div>
  );
};

export default ChatWindow;
