
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ChevronLeft,
  PlayCircle,
  CheckCircle,
  Lock,
  CircleDot,
  Lightbulb,
  MessageSquare,
  BookOpen,
  Mic,
  ClipboardCheck,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface LearnPageProps {
  params: Promise<{
    language: string;
  }>;
}

export default async function LearnPage({ params }: LearnPageProps) {
  const resolvedParams = await params;
  const languageName =
    resolvedParams.language.charAt(0).toUpperCase() +
    resolvedParams.language.slice(1);


  // Mock data for lessons, organized by units
  const units = [
    {
      id: "unit-1",
      title: "Unit 1: Basic Greetings & Introductions",
      lessons: [
        { id: 1, title: "Lesson 1.1: Hello & Goodbye", status: "completed", duration: "15 min", type: "video" },
        { id: 2, title: "Lesson 1.2: My Name Is...", status: "in-progress", duration: "20 min", type: "interactive" },
        { id: 3, title: "Lesson 1.3: Asking How Are You", status: "locked", duration: "18 min", type: "text" },
      ],
    },
    {
      id: "unit-2",
      title: "Unit 2: Essential Vocabulary",
      lessons: [
        { id: 4, title: "Lesson 2.1: Food & Drinks", status: "locked", duration: "25 min", type: "video" },
        { id: 5, title: "Lesson 2.2: Family Members", status: "locked", duration: "20 min", type: "interactive" },
      ],
    },
    {
      id: "unit-3",
      title: "Unit 3: Simple Sentence Structure",
      lessons: [
        { id: 6, title: "Lesson 3.1: Subject-Verb Agreement", status: "locked", duration: "30 min", type: "text" },
      ],
    },
  ]

  const currentLesson = units[0].lessons[1] // Mock current lesson: "Lesson 1.2: My Name Is..." (interactive)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <CircleDot className="h-5 w-5 text-blue-500" />
      case "locked":
        return <Lock className="h-5 w-5 text-gray-400" />
      default:
        return null
    }
  }

  const renderLessonContent = (lessonType: string) => {
    switch (lessonType) {
      case "video":
        return (
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Placeholder YouTube video
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )
      case "interactive":
        return (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center">
            <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive Exercise: Introduce Yourself!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Drag and drop the words to form a complete sentence, or record your voice to practice pronunciation.
            </p>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-3 text-lg">
              Start Interactive Tutorial
            </Button>
          </div>
        )
      case "text":
        return (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Grammar Deep Dive: Verb Conjugation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Understanding verb conjugation is crucial for forming grammatically correct sentences. In this lesson,
              well explore the regular verb conjugations in the present tense. Pay close attention to the endings, as
              they change based on the subject pronoun. Practice regularly to master these patterns.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Regular -AR verbs: e.g., hablar (to speak)</li>
              <li>Regular -ER verbs: e.g., comer (to eat)</li>
              <li>Regular -IR verbs: e.g., vivir (to live)</li>
            </ul>
            <Button variant="outline" className="mt-6 rounded-full bg-transparent">
              Download PDF Notes
            </Button>
          </div>
        )
      default:
        return (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center text-muted-foreground">
            <MessageSquare className="h-16 w-16 mx-auto mb-6" />
            <p>Select a lesson from the outline to begin!</p>
          </div>
        )
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div className="flex items-center gap-4 mb-10">
        <Link href="/dashboard">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-transparent border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            <span className="sr-only">Back to Dashboard</span>
          </Button>
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Learn {languageName}</h1>
      </div>

      <div className="grid lg:grid-cols-[1fr_350px] gap-10">
        {/* Main Content Area */}
        <div className="space-y-10">
          {/* Current Lesson Card */}
          <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl rounded-2xl p-8">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-3xl font-bold drop-shadow-md">Continue Your Journey</CardTitle>
              <CardDescription className="text-lg text-white/90">
                You&apos;re currently on: {currentLesson.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Button
                size="lg"
                className="w-full text-lg py-3 rounded-full bg-white text-purple-600 hover:bg-gray-100 transition-colors shadow-md"
              >
                <PlayCircle className="mr-2 h-6 w-6" /> Continue Lesson
              </Button>
            </CardContent>
          </Card>

          {/* Dynamic Lesson Content */}
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Lesson Content</h2>
          {renderLessonContent(currentLesson.type)}

          {/* Lessons List */}
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Course Outline</h2>
          <Accordion type="multiple" className="w-full space-y-4">
            {units.map((unit) => (
              <Card key={unit.id} className="rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                <AccordionItem value={unit.id} className="border-b-0">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-xl font-semibold text-gray-900 dark:text-white hover:no-underline">
                    {unit.title}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <div className="space-y-4">
                      {unit.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-4 border rounded-xl bg-gray-50 dark:bg-gray-850 border-gray-100 dark:border-gray-700"
                        >
                          <div className="flex items-center gap-3">
                            {getStatusIcon(lesson.status)}
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">{lesson.title}</h4>
                              <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                            </div>
                          </div>
                          {lesson.status === "completed" && (
                            <Button variant="ghost" disabled className="text-green-600 dark:text-green-400">
                              Completed
                            </Button>
                          )}
                          {lesson.status === "in-progress" && (
                            <Button className="text-base py-2 px-4 rounded-full bg-teal-500 hover:bg-teal-600">
                              Continue
                            </Button>
                          )}
                          {lesson.status === "locked" && (
                            <Button
                              variant="outline"
                              disabled
                              className="text-base py-2 px-4 rounded-full bg-transparent border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400"
                            >
                              Locked
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>

        {/* Sidebar / Resources */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Resources</h2>
          <div className="space-y-6">
            <Card className="p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <CardHeader className="p-0 mb-4 flex flex-row items-center gap-4">
                <BookOpen className="h-8 w-8 text-purple-500" />
                <div>
                  <CardTitle className="font-medium text-xl text-gray-900 dark:text-white">Grammar Guide</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Comprehensive rules and examples to master grammar.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Link href="#" className="text-base text-purple-600 hover:underline dark:text-purple-400">
                  View Guide
                </Link>
              </CardContent>
            </Card>
            <Card className="p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <CardHeader className="p-0 mb-4 flex flex-row items-center gap-4">
                <Mic className="h-8 w-8 text-pink-500" />
                <div>
                  <CardTitle className="font-medium text-xl text-gray-900 dark:text-white">
                    Pronunciation Practice
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Audio exercises for perfect accent and clarity.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Link href="#" className="text-base text-purple-600 hover:underline dark:text-purple-400">
                  Start Practice
                </Link>
              </CardContent>
            </Card>
            <Card className="p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <CardHeader className="p-0 mb-4 flex flex-row items-center gap-4">
                <ClipboardCheck className="h-8 w-8 text-teal-500" />
                <div>
                  <CardTitle className="font-medium text-xl text-gray-900 dark:text-white">Quizzes & Tests</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Test your knowledge and track your progress.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Link href="#" className="text-base text-purple-600 hover:underline dark:text-purple-400">
                  Take a Quiz
                </Link>
              </CardContent>
            </Card>
            <Card className="p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <CardHeader className="p-0 mb-4 flex flex-row items-center gap-4">
                <Lightbulb className="h-8 w-8 text-orange-500" />
                <div>
                  <CardTitle className="font-medium text-xl text-gray-900 dark:text-white">
                    Vocabulary Builder
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Expand your lexicon with personalized flashcards.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Link href="#" className="text-base text-purple-600 hover:underline dark:text-purple-400">
                  Build Vocabulary
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
