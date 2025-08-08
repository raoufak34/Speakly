"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


interface LanguagePhrase {
  language: string
  phrase: string
  audioUrl: string // Path to the actual audio file for the phrase
}

// IMPORTANT: These are generic, publicly accessible audio URLs for demonstration.
// For your actual translation audio, you MUST replace these with paths to your own .mp3 files
// located in your public/audio/ directory (e.g., "/audio/hola.mp3").
const languagePhrases: LanguagePhrase[] = [
  { language: "Spanish", phrase: "Hola, ¿cómo estás?", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { language: "French", phrase: "Bonjour, comment ça va?", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { language: "German", phrase: "Hallo, wie geht es dir?", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { language: "Japanese", phrase: "こんにちは、お元気ですか？", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { language: "Korean", phrase: "안녕하세요, 잘 지내세요?", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { language: "Arabic", phrase: "مرحباً، كيف حالك؟", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }, // Added Arabic
  { language: "Chinese (Mandarin)", phrase: "你好，你好吗？", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" }, // Added Chinese
  { language: "Russian", phrase: "Привет, как дела?", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }, // Added Russian
]

export function LanguagePreview() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(languagePhrases[0].language)

  const currentPhrase = languagePhrases.find(
    (item) => item.language === selectedLanguage
  ) || languagePhrases[0]

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-blue-950 dark:to-purple-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            Interactive Preview
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
            Try a Phrase in Any Language
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
            Select a language and hear a common greeting.
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <Card className="p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-blue-800 bg-white dark:bg-blue-900">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Choose Your Language
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Experience how easy it is to start speaking.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-full h-12 text-base rounded-lg border border-gray-300 dark:border-blue-700 dark:bg-blue-800 dark:text-white focus:border-purple-500 focus:ring-purple-500 transition-colors">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent className="dark:bg-blue-800 dark:border-blue-700">
                  {languagePhrases.map((item) => (
                    <SelectItem key={item.language} value={item.language} className="text-base">
                      {item.language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-blue-900 rounded-lg border border-blue-800">
                <p className="flex-grow text-2xl font-semibold text-white text-center sm:text-left">
                  {currentPhrase.phrase}
                </p>
                {/* Removed the Play Audio Button */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
