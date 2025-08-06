import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactContent = () => (
  <div className="flex items-center justify-center h-full">
    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-10 gap-y-6 justify-center">
      {/* Email */}
      <a
        href="mailto:jackie.y.guan@gmail.com"
        className="flex flex-col items-center gap-1 text-center text-gray-300 hover:text-blush transition"
      >
        <Mail size={40} />
        <span className="text-xs">Email</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jackie-guan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-center text-gray-300 hover:text-blush transition"
      >
        <Linkedin size={40} />
        <span className="text-xs">LinkedIn</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/jyguan18"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-center text-gray-300 hover:text-blush transition"
      >
        <Github size={40} />
        <span className="text-xs">GitHub</span>
      </a>

      {/* Discord */}
      <a
        href="https://discordapp.com/users/jyyrcg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-center text-gray-300 hover:text-blush transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 127.14 96.36"
          fill="currentColor"
          width={40}
          height={40}
        >
          <path d="M107.15,8.21A105.36,105.36,0,0,0,81.21,0a72.93,72.93,0,0,0-3.51,7.27,99.84,99.84,0,0,0-28.26,0A72.93,72.93,0,0,0,45.93,0,105.36,105.36,0,0,0,20,8.21C4.3,33.42-1.4,58.13.43,82.54a106.93,106.93,0,0,0,31.56,13.82,77.67,77.67,0,0,0,6.71-10.88,67.15,67.15,0,0,1-10.6-5.16c.89-.65,1.77-1.33,2.62-2,20.61,9.7,43,9.7,63.35,0,.86.73,1.73,1.4,2.62,2a67.15,67.15,0,0,1-10.6,5.16,77.67,77.67,0,0,0,6.71,10.88A106.93,106.93,0,0,0,126.71,82.6c2-23.39-3.7-48.1-19.56-74.39ZM42.56,65.09c-5.75,0-10.49-5.32-10.49-11.87s4.63-11.87,10.49-11.87,10.59,5.41,10.49,11.87C53.05,59.78,48.3,65.09,42.56,65.09Zm42,0c-5.75,0-10.49-5.32-10.49-11.87s4.63-11.87,10.49-11.87,10.59,5.41,10.49,11.87C95.64,59.78,90.89,65.09,84.53,65.09Z" />
        </svg>
        <span className="text-xs">Discord</span>
      </a>
    </div>
  </div>
);

export default ContactContent;
