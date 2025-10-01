import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";


export default function Footer() {

return (


    <>

    <footer className="container mx-auto px-6 py-16 ">
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
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ff00] transition-colors hover:scale-110 transform"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ff00] transition-colors hover:scale-110 transform"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:hamzaajamil3@gmail.com"
                className="text-gray-400 hover:text-[#00ff00] transition-colors hover:scale-110 transform"
              >
                <MdMail className="w-6 h-6" />
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
    
    
    
    </>




    
)





}