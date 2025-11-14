import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-linear-to-r from-emerald-50 via-teal-50 to-cyan-50 backdrop-blur-lg border-b border-emerald-100 py-4 px-8 flex items-center justify-between sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="bg-linear-to-br from-emerald-400 to-teal-500 p-2 rounded-xl shadow-lg shadow-emerald-200">
          <Sparkles className="w-6 h-6 text-white" />
        </div>

        <h1 className="text-2xl font-bold bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Jar of Duas
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex gap-8 items-center">
        <button className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
          About
        </button>
        <button className="bg-linear-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 font-medium">
          Collection
        </button>
      </div>
    </nav>
  );
}
