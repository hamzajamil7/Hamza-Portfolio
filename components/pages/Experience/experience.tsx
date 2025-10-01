





export default function Experience() {

return (
<>
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



</>

    
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