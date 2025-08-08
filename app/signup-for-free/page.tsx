import { SignUpForm } from "@/components/signup-form"

export default function SignUpForFreePage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-140px)] py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-950">
      <SignUpForm
        title="Start Your Free Language Journey!"
        description="Sign up now to access free introductory lessons and explore our platform."
      />
    </div>
  )
}
