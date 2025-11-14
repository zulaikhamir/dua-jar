import { Sparkles } from "lucide-react";

export default function Navbar({ onAboutClick, isAboutOpen }) {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-50 via-violet-50 to-rose-50 backdrop-blur-lg border-b border-violet-100/60 py-4 px-8 flex items-center justify-between sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 p-2 rounded-xl shadow-lg shadow-violet-200/80">
          <Sparkles className="w-6 h-6 text-white drop-shadow" />
        </div>

        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 via-violet-600 to-rose-500 bg-clip-text text-transparent">
          Jar of Duas
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex gap-8 items-center">
        <button
          onClick={onAboutClick}
          className="
    text-slate-600
    font-medium
    px-4 py-1
    rounded-full
    transition-all
    hover:bg-violet-500
    hover:text-rose-200
  "
        >
          About
        </button>
      </div>
    </nav>
  );
}
