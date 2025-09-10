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
  github?: string;
  demo?: string;
  category: string;
}

const categories = ["All", "Games", "Computer Graphics", "Rendering", "Models"];

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
    <div className="flex flex-col w-full min-h-screen bg-midnight">
      {/* Main scrollable content */}
      <div className="flex flex-col md:flex-row gap-4 max-w-[95%] md:max-w-[1200px] mx-auto p-4 pb-44">
        {/* Project Types */}
        <div className="flex-shrink-0">
          <p className="text-sm sm:text-base text-gray font-mono bg-midnight border-2 border-lavender border-b-0 px-3 py-1 rounded-t-lg inline-block">
            Project Types
          </p>

          {/* Small screen: horizontal scroll */}
          <div className="flex md:hidden overflow-x-auto space-x-3 p-2 border-2 border-lavender rounded-b-lg rounded-tr-lg text-gray-200 select-none">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full font-mono text-sm whitespace-nowrap flex-shrink-0 transition ${
                  cat === selectedCategory
                    ? "bg-blush text-midnight font-bold shadow-md"
                    : "bg-midnight hover:bg-lavender border-2 border-lavender hover:text-white"
                }`}
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
                className={`px-6 py-2 rounded-full font-mono text-sm w-40 transition ${
                  cat === selectedCategory
                    ? "bg-blush text-midnight font-bold shadow-md"
                    : "bg-midnight hover:bg-lavender border-2 border-lavender hover:text-white"
                }`}
                onClick={() => setSelectedCategory(cat)}
                aria-current={cat === selectedCategory ? "page" : undefined}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SceneView */}
        <div className="flex-1 min-w-0 max-w-full md:max-w-[800px]">
          <SceneView project={selectedProject} />
        </div>

        {/* Inspector */}
        <div className="flex-1 min-w-0 max-w-full md:max-w-[400px] mt-4 md:mt-0 rounded text-gray-200 md:max-h-[calc(100vh-4rem)]">
          <Inspector project={selectedProject} />
        </div>
      </div>

      {/* Fixed footer tab */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-2 pb-0 bg-midnight">
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
