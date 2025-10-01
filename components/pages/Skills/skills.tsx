import Image from "next/image"

export default function Skills() {

return (

    <>


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
    </>

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