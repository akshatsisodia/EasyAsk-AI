import ChatTitle from "./ChatTitle";
import HistorySVG from "./svg/HistorySVG";
import LogoSVG from "./svg/LogoSVG";
import PlusSVG from "./svg/PlusSVG";

const Sidebar = () => {
  return (
    <aside className="w-full h-full flex flex-col">

      {/* Sidebar Header */}
      <div className="w-full border-b border-[#43434373]">
        <div className="logo flex items-center justify-start gap-2 py-3 px-1">
          <LogoSVG />
          <h2 className="text-xl font-semibold">Aetheric AI</h2>
        </div>
        <div className="flex flex-col gap-2 text-md">
          <div className="p-3 rounded-lg cursor-pointer flex items-center justify-start gap-2 hover:bg-[#2d2d2d]">
            <PlusSVG />
            <p>New thread</p>
          </div>
          <div className="p-3 rounded-lg cursor-pointer flex items-center justify-start gap-2 capitalize hover:bg-[#2d2d2d] mb-3">
            <HistorySVG />
            <p>History</p>
          </div>
        </div>
      </div>

      {/* Sidebar Chats Title */}
      <div className="w-full flex flex-1 flex-col py-4 border-b border-[#43434373]">
        <h2 className="text-lg font-semibold px-2 mb-4">Recent</h2>
        <div className="chatTitle h-full overflow-y-auto flex flex-col">
          <ChatTitle />
          <ChatTitle />
        </div>
      </div>

      {/* Sidebar User Data */}
      <div className="w-full py-2 flex items-center justify-evenly gap-2">
        <div className="h-8 w-8 rounded-full flex items-center justify-center">
          <img className="h-full w-full object-cover rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg" alt="" />
        </div>
        <h4>Diego Hernández</h4>
        <p>Go</p>
      </div>
    </aside>
  );
};

export default Sidebar;
