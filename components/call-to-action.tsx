import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CallToAction() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-teal-500 to-blue-600 text-white">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl drop-shadow-md">
            Ready to Start Your Language Journey?
          </h2>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl/relaxed lg:text-xl/relaxed opacity-90">
            Join thousands of learners worldwide. Sign up today and get access to our free introductory lessons!
          </p>
        </div>
        <div className="mx-auto w-full max-w-md space-y-4">
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1 h-14 text-lg px-6 rounded-full bg-white/20 border-white/30 placeholder:text-white/80 focus:ring-2 focus:ring-white focus:border-white transition-all"
            />
            <Link href="/signup-for-free">
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 text-lg font-semibold rounded-full bg-white text-teal-600 hover:bg-gray-100 transition-colors shadow-lg"
              >
                Sign Up for Free
              </Button>
            </Link>
          </form>
          <p className="text-sm text-white/80">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-white">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
