import { Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-50 via-violet-50 to-rose-50 border-t border-violet-100/60 py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Made with love */}
        <div className="flex items-center gap-2 text-slate-600">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          <span>by</span>
          <a
            href="https://zulaikhamir.github.io/my-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-violet-600 hover:text-rose-600 transition-colors inline-flex items-center gap-1 group"
          >
            Zulaikha Ashiq
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Jar of Duas. All rights reserved.
        </div>

        {/* Optional: Social links or additional info */}
        <div className="flex gap-6 text-sm text-slate-600">
          <button className="hover:text-violet-600 transition-colors">
            Privacy
          </button>
          <button className="hover:text-violet-600 transition-colors">
            Terms
          </button>
          <button className="hover:text-violet-600 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}
