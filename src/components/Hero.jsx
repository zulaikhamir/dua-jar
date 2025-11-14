import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-20 px-4">
      {/* Floating sparkles decoration */}
      <div className="relative mb-6">
        <Sparkles className="w-8 h-8 text-indigo-400 absolute -left-12 -top-2 animate-pulse" />
        <Sparkles className="w-6 h-6 text-rose-400 absolute -right-10 top-1 animate-pulse delay-150" />

        <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 via-violet-600 to-rose-500 bg-clip-text text-transparent">
          Click the jar to receive your prayer
        </h2>
      </div>

      <p className="text-slate-600 text-lg max-w-xl mb-16 leading-relaxed">
        Every prayer is a whisper of hope. Tap the jar and let your heart be
        lifted.
      </p>

      {/* Beautiful Jar button */}
      <div className="relative group cursor-pointer">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>

        {/* Jar container */}
        <div className="relative w-48 h-56 flex flex-col items-center justify-center">
          {/* Jar lid */}
          <div className="w-32 h-8 bg-gradient-to-b from-slate-900 to-slate-700 rounded-t-lg shadow-lg mb-1 group-hover:shadow-xl transition-all duration-300"></div>

          {/* Jar body */}
          <div className="w-40 h-48 bg-gradient-to-br from-indigo-100 via-violet-100 to-rose-100 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center border-4 border-violet-200/60 group-hover:scale-105 group-hover:shadow-violet-300/50 transition-all duration-300">
            <div className="flex flex-col items-center gap-2">
              <Sparkles className="w-12 h-12 text-violet-500 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-indigo-700 font-semibold text-lg">
                Tap Me
              </span>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-rose-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping delay-700"></div>
          </div>
        </div>
      </div>

      {/* Subtle hint text */}
      <p className="text-slate-400 text-sm mt-8 italic">
        ✨ Your daily dose of inspiration awaits
      </p>
    </section>
  );
}
