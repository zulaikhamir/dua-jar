import { Heart, NotebookPen, Sparkles, X } from "lucide-react";

export default function AboutModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative ">
        {/* close button */}
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-teal-600" />
          <h2 className="text-2xl font-semibold text-slate-800">
            About Jar of Duas
          </h2>
        </div>

        {/* Purpose */}
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-teal-50 p-3 rounded-full">
            <Heart className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Purpose</h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Jar of Duas is a peaceful digital sanctuary where you can discover
              beautiful Islamic prayers and supplications for daily spiritual
              reflection.
            </p>
          </div>
        </div>
        {/* How It Works */}
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-teal-50 p-3 rounded-full">
            <NotebookPen className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              How It Works
            </h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Simply click on the jar and receive a randomly selected dua. Each
              prayer includes meaning and spiritual insight.
            </p>
          </div>
        </div>

        {/* Inspiration */}
        <div className="flex items-start gap-4">
          <div className="bg-teal-50 p-3 rounded-full">
            <Sparkles className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              Daily Inspiration
            </h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Make it a habit to draw a dua each day for spiritual guidance,
              comfort, and connection with your faith.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
