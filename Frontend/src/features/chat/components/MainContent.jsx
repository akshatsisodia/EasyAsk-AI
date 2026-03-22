import SearchInput from "./SearchInput";
import ChatMessages from "./ChatMessages";

export default function MainContent({ collapsed, isSidebarOpen, isMobile, onToggle, setIsSidebarOpen }) {
  return (
    <main className="flex-1 relative min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center flex flex-col gap-8">
        <ChatMessages />
        <h1 className="text-3xl text-gray-300">Where should we begin?</h1>
        <SearchInput collapsed={collapsed} />
      </div>
    </main>
  );
}
