import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";


export default function HeroSection() {
  return (
  <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#00ff00]">FRONTEND</span>
                <br />
                <span className="text-white">DEVELOPER</span>
              </h1>
               <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed font-mono">
      <span className="text-[#00ff00] font-bold"> 
        <Typewriter
          words={["Hi, I'm Hamza"]}
          cursor
          cursorStyle="!"
          typeSpeed={100}
          deleteSpeed={0} 
          delaySpeed={9999999} 
          loop={1}
        />
      </span>
      <span className="text-gray-400">  
        {" "}A creative Frontend Developer with 1 year of experience, passionate about building modern, scalable, and responsive web solutions that deliver great user experiences.
      </span>
    </p>
              {/* <Button className="bg-[#00ff00] text-black hover:bg-[#00dd00] font-semibold px-8 py-6 text-base hover:scale-105 transition-transform">
                Hire Me
              </Button> */}
            </div>

            <div className="flex flex-col gap-6 text-right animate-fade-in-up animation-delay-200 mt-16">
              <div className="group">
                <div className="text-[#00ff00] text-4xl font-bold group-hover:scale-110 transition-transform inline-block">
                  1+
                </div>
                <div className="text-gray-400 text-md">Years of Experience</div>
              </div>
              <div className="group">
                 <div className="text-[#00ff00] text-4xl font-bold group-hover:scale-110 transition-transform inline-block">
      <CountUp start={1} end={7} duration={1} suffix="+" />
    </div>
                <div className="text-gray-400 text-md">Completed Projects</div>
              </div>
              <div className="group">
                 <div className="text-[#00ff00] text-4xl font-bold group-hover:scale-110 transition-transform inline-block">
      <CountUp start={1} end={3000} duration={1} suffix="+" />
    </div>
                <div className="text-gray-400 text-md">Hours Worked</div>
              </div>
            </div>
          </div>    



  )}