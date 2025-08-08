import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-purple-500 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('/abstract-pattern.png')] bg-cover bg-center"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg">
                Unlock New Worlds with Language Learning
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl lg:text-2xl mx-auto lg:mx-0 opacity-90">
                Master new languages with engaging lessons, interactive exercises, and a supportive community. Start
                your journey today!
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-10 py-4 text-lg font-semibold rounded-full bg-white text-purple-600 hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Start Learning
                </Button>
              </Link>
              <Link href="/learn/spanish">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-colors shadow-lg bg-transparent"
                >
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none mt-12 lg:mt-0">
            <Image
              src="/language-learning-laptop.png"
              width="700"
              height="700"
              alt="Language Learning"
              style={{ width: "auto", height: "auto" }}

              className="rounded-3xl object-cover shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
