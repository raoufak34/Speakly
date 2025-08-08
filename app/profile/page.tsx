"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Flame, Star, BookOpen, Clock, Crown, Award, CheckCircle2 } from 'lucide-react'

type StoredUser = { email: string }

function nameFromEmail(email: string) {
  const base = email.split("@")[0]?.replace(/[._-]+/g, " ") || "User"
  return base
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ")
}

function initialsFromEmail(email: string) {
  const name = nameFromEmail(email)
  const parts = name.split(" ").filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<StoredUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ll_user")
      if (raw) {
        const parsed = JSON.parse(raw) as StoredUser
        if (parsed?.email) {
          setUser(parsed)
          setLoading(false)
          return
        }
      }
      router.replace("/signin")
    } catch {
      router.replace("/signin")
    } finally {
      setLoading(false)
    }
  }, [router])

  const displayName = useMemo(() => (user?.email ? nameFromEmail(user.email) : "User"), [user])
  const initials = useMemo(() => (user?.email ? initialsFromEmail(user.email) : "LL"), [user])

  const handleSignOut = () => {
    localStorage.removeItem("ll_user")
    router.replace("/signin")
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <div className="animate-pulse w-full max-w-3xl space-y-6 px-6">
          <div className="h-28 rounded-2xl bg-gray-200 dark:bg-gray-800" />
          <div className="h-48 rounded-2xl bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-140px)]">
      {/* Cover */}
      <section className="relative h-52 w-full overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
        <div className="absolute inset-0 bg-[url('/abstract-pattern.png')] opacity-20" />
        <div className="container mx-auto h-full px-4 md:px-6 flex items-end pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow">Your Profile</h1>
        </div>
      </section>

      {/* Profile Summary Card */}
      <div className="container mx-auto px-4 md:px-6 -mt-16 mb-10">
        <Card className="rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Avatar className="h-24 w-24 ring-4 ring-white dark:ring-gray-900 shadow-md">
                <AvatarImage src="/diverse-user-avatars.png" alt="User avatar" />
                <AvatarFallback className="bg-purple-600 text-white text-xl">{initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{displayName}</h2>
                <p className="text-muted-foreground">{user?.email}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    Spanish A1
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
                    French A2
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                    Streak: 3 days
                  </span>
                </div>
              </div>
              <div className="flex gap-3 md:ml-auto">
                <Button variant="outline" className="rounded-full">Edit Profile</Button>
                <Button variant="destructive" className="rounded-full" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 md:px-6 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="rounded-2xl">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300 grid place-items-center">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Current Streak</p>
                <p className="text-xl font-semibold">3 days</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 grid place-items-center">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">XP</p>
                <p className="text-xl font-semibold">1,280</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 grid place-items-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Lessons Done</p>
                <p className="text-xl font-semibold">24</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 grid place-items-center">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time Spent</p>
                <p className="text-xl font-semibold">5h 12m</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main content grid */}
      <div className="container mx-auto px-4 md:px-6 pb-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* Left column */}
          <div className="space-y-6">
            <Card className="rounded-2xl border border-gray-100 dark:border-gray-800">
              <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>A quick snapshot of your learning profile.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Hi, I&apos;m {displayName}. I&apos;m on a journey to master Spanish and improve my French for travel
                  and culture. I aim to practice daily and complete at least 3 lessons a week.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800">
                    Preferred study time: Evenings
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800">
                    Goal: Conversational
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800">
                    Native: English
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-gray-100 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Learning Goals</CardTitle>
                <CardDescription>Track your progress toward each goal.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Simple progress bars */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Spanish A1 Course</span>
                    <span className="text-muted-foreground">76%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800">
                    <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: "76%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>French A2 Practice</span>
                    <span className="text-muted-foreground">42%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800">
                    <div className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600" style={{ width: "42%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Daily Streak</span>
                    <span className="text-muted-foreground">3 / 30 days</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800">
                    <div className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" style={{ width: "10%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-gray-100 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>What you&apos;ve completed recently.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Spanish: Lesson 1.2 - My Name Is...", time: "Today • 12 min", icon: CheckCircle2, color: "text-teal-600 dark:text-teal-400" },
                  { title: "French: Quiz - Basic Greetings", time: "Yesterday • 8 min", icon: CheckCircle2, color: "text-purple-600 dark:text-purple-400" },
                  { title: "Spanish: Flashcards - Family Members", time: "2 days ago • 6 min", icon: CheckCircle2, color: "text-pink-600 dark:text-pink-400" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <item.icon className={`h-5 w-5 mt-0.5 ${item.color}`} />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <Card className="rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-purple-500 to-pink-500" />
              <CardContent className="-mt-10">
                <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 grid place-items-center">
                      <Crown className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Current Plan: Free</h3>
                      <p className="text-sm text-muted-foreground">
                        Unlock unlimited lessons, speaking practice, and advanced modules with Pro.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Link href="/pricing" className="w-full">
                      <Button className="w-full rounded-full">Upgrade to Pro</Button>
                    </Link>
                    <Button variant="outline" className="rounded-full">Compare</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-gray-100 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Milestones you&apos;ve earned.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                {[
                  { label: "First Lesson", icon: Award, color: "text-amber-500" },
                  { label: "5-Day Streak", icon: Flame, color: "text-orange-500" },
                  { label: "1000 XP", icon: Star, color: "text-yellow-500" },
                  { label: "Grammar Whiz", icon: BookOpen, color: "text-blue-500" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-gray-100 dark:border-gray-800 p-3">
                    <b.icon className={`h-5 w-5 ${b.color}`} />
                    <span className="text-sm font-medium">{b.label}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
