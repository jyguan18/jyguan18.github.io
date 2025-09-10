import React from "react";
import {
  Gamepad2,
  Hammer,
  Globe,
  BrainCircuit,
  BookOpenCheck,
} from "lucide-react";

type Page = "Home" | "Projects" | "About" | "Resume";

type HomePageProps = {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
  openModal: (type: string) => void;
};

const HomePage: React.FC<HomePageProps> = ({ setPage, openModal }) => {
  return (
    <div className="flex flex-col justify-center flex-grow px-4 sm:px-6 md:px-10 overflow-y-auto">
      <div className="max-w-full sm:max-w-full md:max-w-5xl mx-auto bg-midnight rounded p-6 md:p-10 space-y-8 text-center w-full h-full">
        <div className="space-y-4">
          <h1
            className="text-3xl md:text-5xl font-bold text-gray-100 cursor-pointer hover:underline"
            onClick={() => openModal("About")}
          >
            Hi! <span className="text-blush">I'm Jackie</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            I'm a Master's student at the University of Pennsylvania studying
            Computer Graphics and Game Technology. With a background in Computer
            Science from Drexel University, I am interested in the intersection
            of art and technology!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-left">
          <div className="flex-1 bg-lavender/50 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray text-center md:text-left">
              Background / Interests
            </h2>
            <ul className="space-y-3 text-base text-gray-300">
              <li className="flex items-start gap-3">
                <Gamepad2 className="w-5 h-5 text-blush mt-1" />
                <span>
                  Game & interactive system development (Unity, Unreal Engine)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Hammer className="w-5 h-5 text-blush mt-1" />
                <span>Technical art & pipeline automation (Python, USD)</span>
              </li>
              <li className="flex items-start gap-3">
                <BrainCircuit className="w-5 h-5 text-blush mt-1" />
                <span>
                  Computer Science foundations (algorithms, systems, data
                  structures)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blush mt-1" />
                <span>
                  Web development & UI prototyping (React, TypeScript,
                  TailwindCSS)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpenCheck className="w-5 h-5 text-blush mt-1" />
                <span>
                  Currently pursuing a Salesforce AI Specialist certification
                </span>
              </li>
            </ul>
          </div>

          <div className="flex-1 border-2 border-lavender p-6 rounded-xl space-y-4 mb-16 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray text-center md:text-left">
              Featured Projects
            </h2>
            <p className="text-gray-300">
              Explore my latest work in game development, graphics, and tools.
            </p>
            <ul className="text-gray-300 mt-4 pl-4 max-w-full sm:max-w-sm mx-auto md:mx-0">
              <li>• VR Hotpot Game</li>
              <li>• Mini-Minecraft</li>
              <li>• Extreme Extermination</li>
            </ul>

            <div className="flex justify-center mt-8 md:mt-6">
              <button
                className="bg-blush text-midnight font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
                onClick={() => setPage("Projects")}
              >
                View Projects →
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 w-full text-center text-xs text-gray-400 p-3 sm:p-2 bg-lavender">
        Developed by Jackie · React · Tailwind CSS
      </footer>
    </div>
  );
};

export default HomePage;
