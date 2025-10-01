import { AnimatedBackground } from "@/components/animated-background"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Menu, Github, Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#1a1a1e] text-white overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
          </div>
          <button className="text-white hover:text-[#00ff00] transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#00ff00]">FRONTEND</span>
                <br />
                <span className="text-white">DEVELOPER</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                Hi I'm Hamza. A creative Frontend Developer with 3+ years of experience. I'm building high-end,
                scalable, and responsive web with solutions.
              </p>
              <Button className="bg-[#00ff00] text-black hover:bg-[#00dd00] font-semibold px-8 py-6 text-base hover:scale-105 transition-transform">
                Hire Me
              </Button>
            </div>

            <div className="flex flex-col gap-6 text-right animate-fade-in-up animation-delay-200">
              <div className="group">
                <div className="text-[#00ff00] text-3xl font-bold group-hover:scale-110 transition-transform inline-block">
                  3+
                </div>
                <div className="text-gray-400 text-sm">Years of Experience</div>
              </div>
              <div className="group">
                <div className="text-[#00ff00] text-3xl font-bold group-hover:scale-110 transition-transform inline-block">
                  7+
                </div>
                <div className="text-gray-400 text-sm">Completed Projects</div>
              </div>
              <div className="group">
                <div className="text-[#00ff00] text-3xl font-bold group-hover:scale-110 transition-transform inline-block">
                  10k+
                </div>
                <div className="text-gray-400 text-sm">Hours Worked</div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed text-gray-300 max-w-4xl animate-fade-in">
            I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the
            specific needs of its users.
          </h2>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6">Hi, I'm Hamza.</h3>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed animate-fade-in-right">
              <p>
                I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in
                creating seamless and intuitive user experiences.
              </p>
              <p>
                My approach focuses on creating scalable, high-performance, and responsive web applications. By
                prioritizing performance, accessibility, and responsiveness, I strive to deliver tangible results that
                go beyond UI/UX.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-6 h-[1px] bg-gray-600" />
            <h3 className="text-sm uppercase tracking-wider text-gray-400">MY STACK</h3>
          </div>

          <div className="space-y-12">
            {/* Frontend */}
            <div className="animate-fade-in-up">
              <h4 className="text-xl font-bold mb-6 text-gray-300">FRONTEND</h4>
              <div className="flex flex-wrap gap-4">
                <TechBadge
                  name="JavaScript"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                />
                <TechBadge
                  name="React"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                />
                <TechBadge
                  name="Angular"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                />
                <TechBadge
                  name="Next.js"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                />
                <TechBadge
                  name="Redux"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                />
                <TechBadge
                  name="Tailwind CSS"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                />
                <TechBadge
                  name="Sass"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                />
                <TechBadge
                  name="Bootstrap"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                />
              </div>
            </div>

            {/* Backend */}
            <div className="animate-fade-in-up animation-delay-100">
              <h4 className="text-xl font-bold mb-6 text-gray-300">BACKEND</h4>
              <div className="flex flex-wrap gap-4">
                <TechBadge
                  name="Node.js"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                />
              </div>
            </div>

            {/* Database */}
            <div className="animate-fade-in-up animation-delay-200">
              <h4 className="text-xl font-bold mb-6 text-gray-300">DATABASE</h4>
              <div className="flex flex-wrap gap-4">
                <TechBadge
                  name="MySQL"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                />
                <TechBadge
                  name="PostgreSQL"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                />
                <TechBadge
                  name="MongoDB"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                />
                <TechBadge
                  name="Prisma"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
                />
              </div>
            </div>

            {/* Tools */}
            <div className="animate-fade-in-up animation-delay-300">
              <h4 className="text-xl font-bold mb-6 text-gray-300">TOOLS</h4>
              <div className="flex flex-wrap gap-4">
                <TechBadge name="Git" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <TechBadge
                  name="Docker"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-6 h-[1px] bg-gray-600" />
            <h3 className="text-sm uppercase tracking-wider text-gray-400">MY EXPERIENCE</h3>
          </div>

          <div className="space-y-8">
            <ExperienceCard
              title="Frontend Developer"
              company="Tech Company"
              period="Oct 2023 - Nov 2024"
              description="Led frontend development for multiple client projects, implementing modern React patterns and optimizing performance."
              technologies={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
            />
            <ExperienceCard
              title="Frontend Developer (Part-time)"
              company="Startup Inc"
              period="Jan 2022 - Oct 2023"
              description="Developed responsive web applications and collaborated with design teams to create intuitive user interfaces."
              technologies={["React", "Redux", "Sass", "Node.js"]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-6 h-[1px] bg-gray-600" />
            <h3 className="text-sm uppercase tracking-wider text-gray-400">SELECTED PROJECTS</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard name="MTI Electronics" tags={["Next.js", "React", "TypeScript"]} />
            <ProjectCard name="Fattcart" tags={["Next.js", "React", "TypeScript"]} />
            <ProjectCard name="Resume Roaster" tags={["Next.js", "React", "TypeScript"]} />
            <ProjectCard name="Real Estate" tags={["Next.js", "React", "TypeScript"]} />
            <ProjectCard name="Consulting Finance" tags={["Next.js", "React", "TypeScript"]} />
            <ProjectCard name="devLinks" tags={["Next.js", "React", "TypeScript"]} />
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-6 h-[1px] bg-gray-600" />
            <h3 className="text-sm uppercase tracking-wider text-gray-400">GET IN TOUCH</h3>
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-400 text-lg">Have a project in mind? Drop me a message!</p>
          </div>

          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-16 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Hamza Jamil</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ff00] transition-colors hover:scale-110 transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ff00] transition-colors hover:scale-110 transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ff00] transition-colors hover:scale-110 transform"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:hamzaajamil3@gmail.com"
                className="text-gray-400 hover:text-[#00ff00] transition-colors hover:scale-110 transform"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">
                Design & Built by Hamza Jamil
                <br />
                All rights reserved © 2025
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function TechBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex items-center gap-3 bg-[#2a2a2e] px-4 py-3 rounded-lg border border-gray-800 hover:border-[#00ff00] transition-all hover:scale-105 cursor-pointer">
      <Image
        src={icon || "/placeholder.svg"}
        alt={name}
        width={24}
        height={24}
        className="group-hover:scale-110 transition-transform"
      />
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
}: {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}) {
  return (
    <div className="group bg-[#2a2a2e] p-6 rounded-lg border border-gray-800 hover:border-[#00ff00] transition-all hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-xl font-semibold text-gray-300 mb-1 group-hover:text-[#00ff00] transition-colors">
            {title}
          </h4>
          <p className="text-gray-400">{company}</p>
        </div>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="text-xs text-[#00ff00] bg-[#00ff00]/10 px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ name, tags }: { name: string; tags: string[] }) {
  return (
    <div className="group bg-[#2a2a2e] p-6 rounded-lg border border-gray-800 hover:border-[#00ff00] transition-all hover:scale-[1.02] cursor-pointer">
      <h4 className="text-2xl font-bold text-gray-300 mb-4 group-hover:text-[#00ff00] transition-colors">{name}</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs text-gray-400 bg-[#1a1a1e] px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
