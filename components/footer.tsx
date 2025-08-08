import Link from "next/link"
import { Languages } from 'lucide-react' // Changed Speech to Languages

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 font-extrabold text-xl tracking-tight text-primary"
      >
        <Languages className="h-7 w-7 text-purple-600 dark:text-purple-400" /> {/* New Languages icon */}
        <span>Speakly</span>
      </Link>
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Speakly. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-6">
        <Link
          href="#"
          className="text-xs text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-xs text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
        >
          Privacy
        </Link>
      </nav>
    </footer>
  )
}
