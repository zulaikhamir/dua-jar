import { Heart, NotebookPen, Sparkles, X } from "lucide-react";

export default function AboutModal({ open, onClose }) {
  if (!open) return null;

  const infoBlocks = [
    {
      icon: Heart,
      title: "Purpose",
      body: "Jar of Duas is a peaceful digital sanctuary where you can discover beautiful Islamic prayers and supplications for daily spiritual reflection.",
    },
    {
      icon: NotebookPen,
      title: "How It Works",
      body: "Tap the jar to receive a lovingly curated dua. Each prayer comes with its translation so you can reflect on its meaning instantly.",
    },
    {
      icon: Sparkles,
      title: "Daily Inspiration",
      body: "Make it a heartwarming ritual to draw a dua each day for guidance, comfort, and connection with your faith.",
    },
  ];

  return (
    <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-linear-to-br from-indigo-50 via-white to-rose-50 rounded-2xl shadow-2xl shadow-violet-200/70 max-w-md w-full p-8 relative ring-1 ring-violet-100/60">
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-violet-600 transition-colors"
          aria-label="Close about modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-6 h-6 text-violet-600" />
          <h2 className="text-2xl font-semibold text-slate-800">
            About Jar of Duas
          </h2>
        </div>

        <div className="space-y-6">
          {infoBlocks.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="bg-linear-to-br from-indigo-100 via-violet-100 to-rose-100 p-3 rounded-2xl shadow-inner shadow-white/40">
                <Icon className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
