import { LanguageCard } from "@/components/language-card"

export default function DashboardPage() {
  const languages = [
    {
      id: "spanish",
      name: "Spanish",
      description: "Start your journey to fluency in Spanish, one of the most spoken languages worldwide.",
      imageUrl: "/spanish-culture.png",
      link: "/learn/spanish",
    },
    {
      id: "french",
      name: "French",
      description: "Immerse yourself in the language of love and culture. Parlez-vous français?",
      imageUrl: "/french-symbol.png",
      link: "/learn/french",
    },
    {
      id: "german",
      name: "German",
      description: "Discover the precision and power of German. Perfect for travel and business.",
      imageUrl: "/either-german-flag-or-berlin-landmark.png",
      link: "/learn/german",
    },
    {
      id: "japanese",
      name: "Japanese",
      description: "Explore the rich culture and unique writing system of Japanese.",
      imageUrl: "/japanese-symbolism.png",
      link: "/learn/japanese",
    },
    {
      id: "korean",
      name: "Korean",
      description: "Dive into the fascinating world of Korean language and culture.",
      imageUrl: "/korean-culture.png",
      link: "/learn/korean",
    },
    {
      id: "italian",
      name: "Italian",
      description: "Learn the beautiful language of Italy, perfect for art, food, and travel.",
      imageUrl: "/italian-landmarks.png",
      link: "/learn/italian",
    },
    {
      id: "arabic",
      name: "Arabic",
      description: "Uncover the rich history and diverse dialects of the Arabic language.",
      imageUrl: "/arabic-calligraphy.png",
      link: "/learn/arabic",
    },
    {
      id: "portuguese",
      name: "Portuguese",
      description: "Explore the vibrant cultures of Portugal and Brazil through their language.",
      imageUrl: "/portuguese-tiles.png",
      link: "/learn/portuguese",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <h1 className="text-4xl font-bold mb-6 text-center tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
        Your Learning Dashboard
      </h1>
      <p className="text-lg text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
        Welcome back! Continue your language journey or explore new courses below.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {languages.map((lang) => (
          <LanguageCard
            key={lang.id}
            language={lang.name}
            description={lang.description}
            imageUrl={lang.imageUrl}
            link={lang.link}
          />
        ))}
      </div>
    </div>
  )
}
