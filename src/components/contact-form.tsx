"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

type FormData = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("[v0] Form submitted:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-300">
          Name
        </Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
          className="bg-[#2a2a2e] border-gray-700 text-white focus:border-[#00ff00] transition-colors"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-300">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="bg-[#2a2a2e] border-gray-700 text-white focus:border-[#00ff00] transition-colors"
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-300">
          Message
        </Label>
        <Textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
          })}
          className="bg-[#2a2a2e] border-gray-700 text-white focus:border-[#00ff00] transition-colors min-h-[150px]"
          placeholder="Tell me about your project..."
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00ff00] text-black hover:bg-[#00dd00] font-semibold py-6 text-base transition-all disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
      </Button>
    </form>
  )
}
