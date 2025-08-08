import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface LanguageCardProps {
  language: string
  description: string
  imageUrl: string
  link: string
}

export function LanguageCard({ language, description, imageUrl, link }: LanguageCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
      <CardHeader className="p-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Learn ${language}`}
          width={400}
          height={225}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{language}</CardTitle>
        <CardDescription className="text-muted-foreground text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={link} className="w-full">
          <Button className="w-full text-lg py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
            Start Learning
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
