import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-purple-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/abstract-pattern.png')] bg-cover bg-center"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg mb-6">
            About Speakly
          </h1>
          <p className="max-w-3xl text-lg md:text-xl lg:text-2xl mx-auto opacity-90">
            Our mission is to make language learning accessible, engaging, and effective for everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Speakly, we believe that language is the key to unlocking new cultures, opportunities, and
                connections. Our mission is to empower individuals to confidently communicate in any language, fostering
                global understanding and personal growth through innovative and enjoyable learning experiences.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where language barriers are a thing of the past, and everyone has the tools to
                connect with others across borders. We strive to be the leading platform for immersive and effective
                language education, continuously evolving to meet the diverse needs of our global community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Meet Our Team
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Behind Speakly is a passionate team of educators, developers, and language enthusiasts dedicated to
              your success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <Image
                src="/rpk.jpg"
                alt="Team Member 3"
                width={200}
                height={200}
                className="rounded-full object-cover mb-6 border-4 border-teal-300 dark:border-teal-700"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Akhrouf Abderraouf</h3>
              <p className="text-primary font-semibold mb-4">CEO & Co-Founder</p>
              <p className="text-muted-foreground text-base">
                A visionary leader with a passion for education and technology.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <Image
                src="/ayata.jpg"
                alt="Team Member 3"
                width={200}
                height={200}
                className="rounded-full object-cover mb-6 border-4 border-teal-300 dark:border-teal-700"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ayata Habibellah</h3>
              <p className="text-primary font-semibold mb-4">Head of Curriculum</p>
              <p className="text-muted-foreground text-base">An experienced linguist and curriculum designer.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <Image
                src="/ramy.png"
                alt="Team Member 3"
                width={200}
                height={200}
                className="rounded-full object-cover mb-6 border-4 border-teal-300 dark:border-teal-700"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Medjoubi Ramy</h3>
              <p className="text-primary font-semibold mb-4">Lead Developer</p>
              <p className="text-muted-foreground text-base">
                Bringing innovative tech solutions to language learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (reused from homepage) */}
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
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 text-lg font-semibold rounded-full bg-white text-teal-600 hover:bg-gray-100 transition-colors shadow-lg"
              >
                Sign Up for Free
              </Button>
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
    </div>
  )
}
