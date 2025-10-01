


export default function Projects() {

return (

     <>
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


</>
    
)}



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