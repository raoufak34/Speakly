"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Languages } from 'lucide-react'

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const emailOk = /.+@.+\..+/.test(email)
    if (!emailOk) return "Please enter a valid email address."
    if (password.length < 6) return "Password must be at least 6 characters."
    return null
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) {
      setError(err)
      return
    }
    setSubmitting(true)
    try {
      // Mock sign-in: store user locally and redirect to profile
      localStorage.setItem("ll_user", JSON.stringify({ email }))
      router.push("/profile")
    } catch (e) {
      setError("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-140px)] py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-950">
      <Card className="w-full max-w-md p-8 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <CardHeader className="text-center space-y-4 mb-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <Languages className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">LinguaLearn</h1>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">Sign In</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Welcome back! Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="grid gap-4" onSubmit={onSubmit} noValidate>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-base font-medium text-gray-700 dark:text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 text-base px-4 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Password
                </Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 text-base px-4 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-blue-500 transition-colors"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="w-full text-lg py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all shadow-md mt-2 disabled:opacity-60"
            >
              {submitting ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div className="text-center text-base text-muted-foreground mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="underline text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
