import React from "react";
import {
  Gamepad2,
  Hammer,
  Globe,
  BrainCircuit,
  BookOpenCheck,
} from "lucide-react";

type Page = "Home" | "Projects";

type HomePageProps = {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
};

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  return (
    <div className="flex justify-center flex-grow p-4">
      <div
        className="max-w-2xl mx-auto border-2 border-lavender bg-midnight rounded p-6 md:p-10 space-y-8 text-center
             overflow-y-auto max-h-[90vh]"
      >
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-100">
            Hi! <span className="text-blush">I'm Jackie</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            I'm a Master's student at the University of Pennsylvania studying
            Computer Graphics and Game Technology. With a background in Computer
            Science from Drexel University, I am an avid gamer, movie-lover, and
            enjoy whitewater rafting!
          </p>
        </div>

        <div className="space-y-4 bg-lavender/50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray">What I Do</h2>
          <ul className="mx-auto max-w-xl space-y-3 text-base text-gray-300">
            <li className="flex items-center justify-center gap-3">
              <Gamepad2 className="w-5 h-5 text-blush mt-0.5" />
              <span>
                Game & interactive system development (Unity, Unreal Engine)
              </span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Hammer className="w-5 h-5 text-blush mt-0.5" />
              <span>Technical art & pipeline automation (Python, USD)</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <BrainCircuit className="w-5 h-5 text-blush mt-0.5" />
              <span>
                Computer Science foundations (algorithms, systems, data
                structures)
              </span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Globe className="w-5 h-5 text-blush mt-0.5" />
              <span>
                Web development & UI prototyping (React, TypeScript,
                TailwindCSS)
              </span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <BookOpenCheck className="w-5 h-5 text-blush mt-0.5" />
              <span>
                Currently pursuing a Salesforce AI Specialist certification
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Explore my latest work in game development, graphics, and tools.
          </p>
          <button
            className="bg-blush text-midnight font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
            onClick={() => setPage("Projects")}
          >
            View Projects →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
