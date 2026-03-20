import { useRef } from "react";

export default function SearchInput() {
  const textareaRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // stop new line

      const value = textareaRef.current.value.trim();
      if (!value) return;

      console.log("Send:", value);

      // clear input
      textareaRef.current.value = "";
      textareaRef.current.style.height = "24px";
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    const maxHeight = 120;
    if (el.scrollHeight > maxHeight) {
      el.style.height = maxHeight + "px";
      el.style.overflowY = "auto"; // enable scroll only after limit
    } else {
      el.style.height = el.scrollHeight + "px";
      el.style.overflowY = "hidden";
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 gap-4 flex flex-col">
        <textarea onKeyDown={handleKeyDown} ref={textareaRef} onInput={handleInput} rows={1} className="w-full resize-none bg-transparent overflow-hidden max-h-30 outline-none text-gray-300 placeholder-gray-500 text-sm" placeholder="Type / for search modes and shortcuts" />

        <div className="flex items-center justify-between mt-3">
          <div className="shrink-0 w-8 h-8 rounded-full bg-[#0b0b0b] border border-[#2a2a2a] flex items-center justify-center text-gray-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <button className="ml-2 w-8 h-8 rounded-full bg-[#151515] border border-[#2a2a2a] flex items-center justify-center hover:bg-[#191919] transition-colors" aria-label="submit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
