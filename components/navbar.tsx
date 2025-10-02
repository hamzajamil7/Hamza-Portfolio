"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1e]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
            <span className="text-xl font-bold text-white group-hover:text-[#00ff00] transition-colors">Hamza</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-14">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 transition-colors text-sm font-semibold"
              >
                {link.name}
              </a>
            ))}


            <div className="hidden md:inline-block">
            <a className=" bg-[#00ff00] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#00ff00]/90 transition-colors">
              Resume
            </a>
          </div>
          </div>


          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#00ff00] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>




        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-400 hover:text-[#00ff00] transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}


  <div className="flex items-center justify-end mt-4">
            <a className="inline-block bg-[#00ff00] text-black px-5 py-2 rounded-sm font-semibold hover:bg-[#00ff00]/90 transition-colors">
              Resume
            </a>
          </div>
            
          </div>
          
        
          </>



        )}
      </div>
    </nav>
  )
}
