"use client"

import Link from "next/link"
import { Languages, Moon, Sun, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription  } from "@/components/ui/sheet"


export function Header() {
const { setTheme } = useTheme()

return (
  <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
    <Link
      href="/"
      className="flex items-center justify-center gap-2 font-extrabold text-xl tracking-tight text-primary"
    >
      <Languages className="h-7 w-7 text-purple-600 dark:text-purple-400" />
      <span>Speakly</span>
    </Link>

    {/* Desktop Navigation */}
    <nav className="ml-auto hidden lg:flex gap-6 items-center">
      <Link
        href="/"
        className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/learn/spanish"
        className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
      >
        Learn
      </Link>
      <Link
        href="/pricing"
        className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
      >
        Pricing
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
      >
        About Us
      </Link>
      <Link
        href="/contact" // New link for Contact Us page
        className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
      >
        Contact Us
      </Link>
      <Link href="/signin">
        <Button
          variant="ghost"
          className="text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
        >
          Sign In
        </Button>
      </Link>
      <Link href="/signup">
        <Button size="sm" className="px-4 py-2 rounded-full text-sm font-medium">
          Sign Up
        </Button>
      </Link>
    </nav>

    {/* Theme Toggle (visible on all screen sizes) */}
    <div className="ml-auto lg:ml-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    {/* Mobile Menu (Hamburger) */}
    <Sheet>
      <SheetTrigger asChild className="lg:hidden ml-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px] flex flex-col py-8">
      <SheetHeader>
  <SheetTitle className="sr-only">Navigation</SheetTitle>
  <SheetDescription>aaaaa</SheetDescription>
</SheetHeader>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 font-extrabold text-xl tracking-tight text-primary mb-8"
        >
          <Languages className="h-7 w-7 text-purple-600 dark:text-purple-400" />
          <span>Speakly</span>
        </Link>
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="/"
            className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/learn/spanish"
            className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            Learn
          </Link>
          <Link
            href="/pricing"
            className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact" // New link for Mobile Contact Us page
            className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
            <Link href="/signin" className="block mb-4">
              <Button variant="ghost" className="w-full justify-start text-lg py-3 px-4">
                Sign In
              </Button>
            </Link>
            <Link href="/signup" className="block">
              <Button className="w-full text-lg py-3 rounded-full">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  </header>
)
}
