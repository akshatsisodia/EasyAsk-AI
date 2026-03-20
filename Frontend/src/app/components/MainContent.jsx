import React from "react";
import SearchInput from "./SearchInput";

export default function MainContent({ collapsed = false }) {
  return (
    <main className={`${collapsed ? "ml-20" : "ml-72"} min-h-screen bg-[#121212] flex items-center justify-center transition-all duration-200`}>
      <div className="w-full max-w-3xl px-6 py-12 text-center flex flex-col gap-10">
        <h1 className="text-6xl font-[neue] text-gray-300 mb-8">perplexity</h1>
        <SearchInput />
      </div>
    </main>
  );
}
