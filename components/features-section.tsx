import { BookOpen, Globe, Users, Award } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            Key Features
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
            Why Choose Speakly?
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
            Our platform is designed to make language learning effective, fun, and accessible for everyone.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-4 text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center">
              <BookOpen className="h-14 w-14 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Structured Lessons</h3>
            <p className="text-base text-muted-foreground">
              Follow a clear path with lessons designed by language experts.
            </p>
          </div>
          <div className="grid gap-4 text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center">
              <Globe className="h-14 w-14 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Immersive Experience</h3>
            <p className="text-base text-muted-foreground">
              Practice with real-world scenarios and native speaker audio.
            </p>
          </div>
          <div className="grid gap-4 text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center">
              <Users className="h-14 w-14 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Community Support</h3>
            <p className="text-base text-muted-foreground">Connect with other learners and get help from tutors.</p>
          </div>
          <div className="grid gap-4 text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center">
              <Award className="h-14 w-14 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Progress Tracking</h3>
            <p className="text-base text-muted-foreground">Monitor your achievements and stay motivated.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
