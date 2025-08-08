import Link from "next/link"
import { CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Free Tier",
      price: "$0",
      period: "per month",
      description: "Perfect for beginners to get started with basic lessons.",
      features: [
        "Access to introductory lessons",
        "Basic vocabulary exercises",
        "Limited daily practice",
        "Community forum access",
      ],
      buttonText: "Start for Free",
      buttonLink: "/signup-for-free",
      highlight: false,
    },
    {
      name: "Pro Learner",
      price: "$14.99",
      period: "per month",
      description: "Unlock full access to all courses and advanced features.",
      features: [
        "Unlimited access to all lessons",
        "Advanced grammar modules",
        "Interactive speaking practice",
        "Personalized progress tracking",
        "Offline access to lessons",
        "Priority community support",
      ],
      buttonText: "Get Started",
      buttonLink: "/signup",
      highlight: true,
    },
    {
      name: "Premium Tutor",
      price: "$29.99",
      period: "per month",
      description: "For dedicated learners seeking personalized guidance.",
      features: [
        "Everything in Pro Learner",
        "Weekly 1-on-1 live tutor sessions",
        "Customized learning plans",
        "Exclusive cultural insights",
        "Early access to new features",
        "Dedicated customer success manager",
      ],
      buttonText: "Contact Sales",
      buttonLink: "#contact", // Placeholder for a contact section
      highlight: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      {/* Hero Section for Pricing */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-teal-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/abstract-pattern.png')] bg-cover bg-center"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg mb-6">
            Choose Your Learning Path
          </h1>
          <p className="max-w-3xl text-lg md:text-xl lg:text-2xl mx-auto opacity-90">
            Find the perfect plan to accelerate your language learning journey.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                  plan.highlight
                    ? "border-4 border-purple-500 dark:border-purple-400 bg-white dark:bg-gray-800 scale-105"
                    : "border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
                }`}
              >
                <CardHeader className="text-center p-8 pb-4">
                  <CardTitle
                    className={`text-3xl font-bold mb-2 ${
                      plan.highlight ? "text-purple-600 dark:text-purple-400" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-8 pt-0">
                  <div className="text-center mb-6">
                    <span className="text-6xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-xl text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Link href={plan.buttonLink} className="w-full">
                    <Button
                      size="lg"
                      className={`w-full text-lg py-3 rounded-full font-semibold transition-colors shadow-lg ${
                        plan.highlight
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Optional, but good for conversion) */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8 text-left">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What languages are available?
              </h3>
              <p className="text-muted-foreground text-lg">
                We offer a wide range of languages including Spanish, French, German, Japanese, Korean, Italian, Arabic,
                and Portuguese, with more being added regularly!
              </p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Can I switch plans later?
              </h3>
              <p className="text-muted-foreground text-lg">
                Yes, you can upgrade or downgrade your plan at any time directly from your account settings.
              </p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer a free trial?
              </h3>
              <p className="text-muted-foreground text-lg">
                Our Free Tier provides access to introductory lessons, acting as a comprehensive free trial for you to
                experience our platform.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What if I need a refund?
              </h3>
              <p className="text-muted-foreground text-lg">
                We offer a 30-day money-back guarantee for all paid plans. Your satisfaction is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
