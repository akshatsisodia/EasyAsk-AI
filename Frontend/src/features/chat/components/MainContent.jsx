import SearchInput from "../components/SearchInput";
import ChatMessages from "../components/ChatMessages";

export default function MainContent({ collapsed = false }) {
  return (
    <main className={`flex-1 min-h-screen bg-[#121212] flex items-center justify-center transition-all duration-200`}>
      <div className="mx-auto w-[40%] h-full text-center flex items-center justify-center flex-col gap-8">
        <ChatMessages/>
        <h1 className="text-3xl font-[neue] text-gray-300">Where should we begin?</h1>
        <SearchInput collapsed={collapsed}/>
      </div>
    </main>
  );
}
