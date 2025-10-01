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
    console.log("Form submitted:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (


    <>
    
    
    <div className="flex items-center gap-3 mb-12">
                <div className="w-6 h-[1px] bg-gray-600" />
                <h3 className="text-sm uppercase tracking-wider text-gray-400">GET IN TOUCH</h3>
              </div>
    
              <div className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-gray-400 text-lg">Have a project in mind? Drop me a message!</p>
              </div>
   
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


     </>
  )
}
