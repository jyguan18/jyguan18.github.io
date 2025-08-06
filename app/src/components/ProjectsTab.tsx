import React from "react";
import type { Project } from "../pages/ProjectsPage";

interface ProjectsTabProps {
  projects: Project[];
  selected: Project;
  onSelect: (project: Project) => void;
}

const ProjectsTab: React.FC<ProjectsTabProps> = ({
  projects,
  selected,
  onSelect,
}) => {
  return (
    <div className="w-full px-2 sm:px-4">
      {/* Header label */}
      <p className="text-sm sm:text-base text-gray font-mono bg-lavender px-3 py-1 rounded-t-lg inline-block">
        Projects
      </p>

      {/* Project tab buttons */}
      <div className="bg-lavender px-2 sm:px-4 py-2 overflow-x-auto flex space-x-2 sm:space-x-4 rounded-tr-lg rounded-bl-none rounded-br-none">
        {projects.map((project) => (
          <button
            key={project.name}
            onClick={() => onSelect(project)}
            className={`flex-shrink-0 cursor-pointer rounded-t-md border-2 border-b-0 transition ${
              project === selected
                ? "border-blush bg-lavender"
                : "border-midnight hover:border-purple bg-transparent"
            } w-24 sm:w-28 md:w-32 lg:w-36`}
            aria-label={`Select project ${project.name}`}
          >
            <video
              src={project.video}
              muted
              loop
              playsInline
              className="w-full h-16 sm:h-20 object-cover"
            />
            <p className="text-gray-200 text-center font-mono text-xs truncate px-1 bg-midnight">
              {project.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;
