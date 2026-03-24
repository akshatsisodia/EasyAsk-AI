import React from "react";

const InputBox = () => {
  return (
    <div className="w-full flex items-center gap-2 py-3">
      <div className="w-full bg-[#272727] px-3 py-4 flex flex-col gap-2 rounded-2xl">
        <textarea type="text" placeholder="Ask Anything..." className="w-full flex-1 px-3 text-xl rounded-lg outline-none resize-none overflow-y-auto" />
        <div className="w-full flex items-center justify-between">
          <button className="px-2 py-2 text-xl rounded-full transition-all bg-[#3b3b3b] hover:bg-blue-600 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          </button>
          <button className="px-2 py-2 text-xl rounded-full transition-all bg-[#3b3b3b] hover:bg-blue-600 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
