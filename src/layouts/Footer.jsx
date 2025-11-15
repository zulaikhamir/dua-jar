import { Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-indigo-50 via-violet-50 to-rose-50 border-t border-violet-100/60 py-8 px-4 sm:px-6">
      <div className="w-full flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        {/* Left cluster */}
        <div className="flex items-center gap-2">
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

        {/* Right cluster */}
        <div className="flex items-center gap-3 text-slate-500">
          <span>© {new Date().getFullYear()} Jar of Duas.</span>
          <a
            href="https://www.linkedin.com/in/zulaikhaashiq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-rose-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
