import React, { useState } from "react";
import TopToolbar from "../components/TopToolbar";
import SceneView from "../components/SceneView";
import Inspector from "../components/Inspector";
import ProjectsTab from "../components/ProjectsTab";
import { projects } from "../types/projects";

// Define the shape of a project object
export interface Project {
  id: number;
  name: string;
  description: string;
  video: string;
  tools: string[];
  github: string;
  demo: string;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <div className="flex flex-col h-full w-full bg-midnight">
      <div className="flex flex-col md:flex-row flex-grow overflow-auto p-2 md:p-4 gap-2 md:gap-4">
        <div className="flex-grow min-w-0 border-2 border-lavender bg-midnight rounded p-2 md:p-4 text-gray-200 overflow-auto">
          <SceneView project={selectedProject} />
        </div>

        <div className="w-full md:w-72 flex-shrink-0 rounded text-gray-200 overflow-auto max-h-[50vh] md:max-h-full">
          <Inspector project={selectedProject} />
        </div>
      </div>

      <ProjectsTab
        projects={projects}
        selected={selectedProject}
        onSelect={setSelectedProject}
      />
    </div>
  );
}
