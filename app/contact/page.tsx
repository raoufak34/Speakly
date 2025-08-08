import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-purple-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/abstract-pattern.png')] bg-cover bg-center"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg mb-6">
            Contact Us
          </h1>
          <p className="max-w-3xl text-lg md:text-xl lg:text-2xl mx-auto opacity-90">
            Have questions or need support? Reach out to us, and well be happy to help!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
              <form className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-base font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </Label>
                  <Input id="name" type="text" placeholder="Your Name" required className="h-11 text-base px-4 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-purple-500 focus:ring-purple-500 transition-colors" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-base font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="you@example.com" required className="h-11 text-base px-4 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-purple-500 focus:ring-purple-500 transition-colors" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject" className="text-base font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </Label>
                  <Input id="subject" type="text" placeholder="Regarding your inquiry..." required className="h-11 text-base px-4 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-purple-500 focus:ring-purple-500 transition-colors" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-base font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} required className="min-h-[120px] text-base px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-purple-500 focus:ring-purple-500 transition-colors" />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all shadow-md mt-4">
                  Submit Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Contact Details</h2>
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 text-purple-500 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-muted-foreground text-lg">
                    <Link href="mailto:support@lingualearn.com" className="hover:underline text-purple-600 dark:text-purple-400">support@Speakly.com</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-pink-500 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-muted-foreground text-lg">
                    <Link href="tel:+1234567890" className="hover:underline text-pink-600 dark:text-pink-400">0674919711</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-teal-500 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                  <p className="text-muted-foreground text-lg">
                    123 Language Lane, Suite 400<br />
                    Global City, GC 98765
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
