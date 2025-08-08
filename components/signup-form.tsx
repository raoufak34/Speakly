"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Speech } from "lucide-react" // Import Speech icon for logo

interface SignUpFormProps {
  title?: string
  description?: string
  showSignInLink?: boolean
}

export function SignUpForm({
  title = "Create Your Account",
  description = "Join Speakly today and start your language journey!",
  showSignInLink = true,
}: SignUpFormProps) {
  return (
    <Card className="w-full max-w-md p-10 shadow-2xl rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800">
      <CardHeader className="text-center space-y-4 mb-8">
        <div className="flex flex-col items-center justify-center gap-3">
          <Speech className="h-10 w-10 text-purple-600 dark:text-purple-400" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Speakly</h1>
        </div>
        <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">{title}</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-base font-medium text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="h-12 text-base px-4 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:border-teal-500 focus:ring-teal-500 transition-colors"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-base font-medium text-gray-700 dark:text-gray-300">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              required
              className="h-12 text-base px-4 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:border-teal-500 focus:ring-teal-500 transition-colors"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password" className="text-base font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              required
              className="h-12 text-base px-4 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:border-teal-500 focus:ring-teal-500 transition-colors"
            />
          </div>
          <Button
            type="submit"
            className="w-full text-lg py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white transition-all shadow-lg mt-4"
          >
            Sign Up
          </Button>
        </div>
        {showSignInLink && (
          <div className="text-center text-base text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="underline text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
            >
              Sign In
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
