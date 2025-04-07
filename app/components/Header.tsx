import Link from "next/link";
import { Clock, BookOpen, LayoutDashboard } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Clock className="text-blue-500 w-6 h-6" />
          <span className="text-xl font-extrabold text-gray-900 tracking-tight">
            14 Days
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
          <Link
            href="/learn"
            className="flex items-center gap-1 hover:text-blue-500 transition"
          >
            <BookOpen className="w-4 h-4" /> Learn
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-1 hover:text-blue-500 transition"
          >
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
        </nav>

        {/* Call to action */}
        <div className="hidden md:block">
          <Link
            href="/learn"
            className="bg-blue-500 text-white font-semibold text-sm px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
          >
            Login / Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
