'use client';
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "next/image"
import { ContactForm } from "@/components/contact-form" // Import ContactForm component
import HeroSection from "@/components/pages/HeroSection/hero_section";
import About from "@/components/pages/About/about";
import Experience from "@/components/pages/Experience/experience";
import Projects from "@/components/pages/Projects/projects";
import Skills from "@/components/pages/Skills/skills";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#1a1a1e] text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10">

        {/* Hero Section */}
        <section id="home" className="container mx-auto px-6 py-12 md:py-20 mt-15">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-16 md:py-24">
         <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-6 py-16 md:py-24">
          <Skills />
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-6 py-16 md:py-24">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-6 py-16 md:py-24">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-16 md:py-24">
          <ContactForm />
        </section>

        {/* Footer */}
        <Footer />
      </div>
      
    </div>
  )
}






