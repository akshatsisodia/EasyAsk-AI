import React from "react";

const NavItem = ({ className = "", children, active, onClick, collapsed }) => (
  <div onClick={onClick} role="button" tabIndex={0} className={`flex items-center ${collapsed ? "justify-center" : "gap-3"} ${collapsed ? "px-2" : "px-3"} py-2 rounded-xl cursor-pointer select-none text-sm ${className} ${active ? "bg-[#141414] text-gray-100" : "text-gray-300 hover:bg-[#222222]"}`}>
    {children}
  </div>
);

const chats = [
  {
    id: 1,
    content: "hello",
  },
  {
    id: 2,
    content: "hello",
  },
  {
    id: 3,
    content: "hello",
  },
  {
    id: 4,
    content: "hello",
  },
  {
    id: 5,
    content: "hello",
  },
];

export default function Sidebar({ collapsed = false, onToggle, isSidebarOpen }) {
  

  return (
    <aside onClick={()=>{if(!collapsed){onToggle()}}} className={`shrink-0 ${collapsed ? "w-18" : "w-60"} bg-[#1a1a1a] text-gray-300 border-r border-[#2a2a2a] cursor-e-resize flex-col p-4 transition-all duration-200 min-h-screen hidden md:flex `}>
      <nav className="space-y-2">
        <div className="w-full flex items-start justify-between">
          <NavItem active collapsed={collapsed} className={`${collapsed ? "hidden" : "block"}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
              <path d="M5.73486 2L11.4299 7.24715V7.24595V2.01211H12.5385V7.27063L18.2591 2V7.98253H20.6078V16.6118H18.2663V21.9389L12.5385 16.9066V21.9967H11.4299V16.9896L5.74131 22V16.6118H3.39258V7.98253H5.73486V2ZM10.5942 9.0776H4.50118V15.5167H5.73992V13.4856L10.5942 9.0776ZM6.84986 13.9715V19.5565L11.4299 15.5225V9.81146L6.84986 13.9715ZM12.5704 15.4691L17.1577 19.4994V16.6118H17.1518V13.9663L12.5704 9.80608V15.4691ZM18.2663 15.5167H19.4992V9.0776H13.4516L18.2663 13.4399V15.5167ZM17.1505 7.98253V4.51888L13.3911 7.98253H17.1505ZM10.6028 7.98253L6.84346 4.51888V7.98253H10.6028Z"></path>
            </svg>
          </NavItem>

          <NavItem onClick={(e)=> { e.stopPropagation(); onToggle();}} collapsed={collapsed}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6.5 5.5H17.5C18.6 5.5 19.5 6.4 19.5 7.5V16.5C19.5 17.6 18.6 18.5 17.5 18.5H6.5C5.4 18.5 4.5 17.6 4.5 16.5V7.5C4.5 6.4 5.4 5.5 6.5 5.5ZM9 5.5V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </NavItem>
        </div>

        <NavItem collapsed={collapsed}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={`${collapsed ? "hidden" : "inline"}`}>New thread</span>
        </NavItem>

        <NavItem collapsed={collapsed}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 4v4h4" />
            <path d="M12 7v5l3 2" />
          </svg>
          <span className={`${collapsed ? "hidden" : "inline"}`}>History</span>
        </NavItem>
      </nav>

      <div className={`mt-6 border-t border-[#2a2a2a] pt-4 ${collapsed ? "hidden" : "block"}`}>
        <div className="text-md text-gray-400 capitalize mb-4">Your Chats</div>
        <div className="flex flex-col overflow-y-auto">
          {chats.map((chat, idx) => {
            return (
              <div key={chat.id} className="text-sm text-gray-300 truncate hover:bg-[#222222] px-2 py-3 rounded-md cursor-pointer">
                {chat.content}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-[#2a2a2a]">
        <div className={`flex items-center gap-3 text-sm text-gray-300 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-9 h-9 rounded-full bg-[#121212] border border-[#2a2a2a] flex items-center justify-center">U</div>
          {!collapsed && (
            <div className="flex-1">
              <div className="text-sm text-gray-100">soulxaksha49</div>
              <div className="text-xs text-gray-500">Account</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}


