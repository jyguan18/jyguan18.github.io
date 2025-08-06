import { useState } from "react";
import SceneView from "../components/SceneView";
import Inspector from "../components/Inspector";
import ProjectsTab from "../components/ProjectsTab";
import { projects } from "../types/projects";

export interface Project {
  id: number;
  name: string;
  description: string;
  contributions?: string[];
  video?: string;
  photos?: string[];
  tools: string[];
  github: string;
  demo: string;
  category: string;
}

const categories = [
  "All",
  "Games",
  "USD",
  "Computer Graphics",
  "Rendering",
  "Models",
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  if (!filteredProjects.find((p) => p.id === selectedProject.id)) {
    setSelectedProject(filteredProjects[0]);
  }

  return (
    <div className="flex flex-col w-full h-full bg-midnight">
      <div className="flex flex-grow justify-center items-center p-6 w-full pb-36 sm:pb-36">
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-[1280px]">
          {/* Sections */}
          <div>
            <p className="text-sm sm:text-base text-gray font-mono bg-midnight border-2 border-lavender border-b-0 px-3 py-1 rounded-t-lg inline-block">
              Project Types
            </p>

            {/* Small screen */}
            <div className="flex md:hidden overflow-x-auto space-x-3 p-2 border-2 border-lavender rounded-b-lg rounded-tr-lg text-gray-200 select-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full font-mono text-sm whitespace-nowrap flex-shrink-0 transition ${
                    cat === selectedCategory
                      ? "bg-blush text-midnight font-bold shadow-md"
                      : "bg-midnight hover:bg-lavender border-2 border-lavender hover:text-white"
                  } focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-1`}
                  onClick={() => setSelectedCategory(cat)}
                  aria-current={cat === selectedCategory ? "page" : undefined}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Medium+ screen */}
            <div className="hidden md:flex flex-col gap-3 items-center p-3 text-gray-200 select-none border-2 border-lavender rounded-tr-lg rounded-br-lg rounded-bl-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-2 rounded-full font-mono text-sm transition w-40 ${
                    cat === selectedCategory
                      ? "bg-blush text-midnight font-bold shadow-md"
                      : "bg-midnight hover:bg-lavender border-2 border-lavender hover:text-white"
                  } focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-1`}
                  onClick={() => setSelectedCategory(cat)}
                  aria-current={cat === selectedCategory ? "page" : undefined}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* SceneView */}
          <div className="min-w-0 text-gray-200 flex justify-center w-full h-auto">
            <div className="max-w-4xl w-full md:w-auto">
              <SceneView project={selectedProject} />
            </div>
          </div>

          {/* Inspector */}
          <div className="w-full md:w-72 flex-shrink-0 rounded text-gray-200 overflow-auto max-h-[40vh] md:max-h-full">
            <Inspector project={selectedProject} />
          </div>
        </div>
      </div>

      {/* Fixed footer tab */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-2 pb-0">
        <ProjectsTab
          projects={filteredProjects}
          selected={selectedProject}
          onSelect={setSelectedProject}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
