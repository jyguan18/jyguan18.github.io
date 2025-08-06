// src/components/ProjectsTab.tsx
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
    <div className="bg-lavender py-2 px-4 overflow-x-auto whitespace-nowrap flex space-x-4 rounded-t-md border-t border-gray-600">
      {projects.map((project) => (
        <button
          key={project.name}
          onClick={() => onSelect(project)}
          className={`flex-shrink-0 cursor-pointer rounded-md border-2 ${
            project === selected
              ? "border-blush"
              : "border-midnight hover:border-purple"
          } overflow-hidden w-32`}
          aria-label={`Select project ${project.name}`}
        >
          <video
            src={project.video}
            muted
            loop
            playsInline
            className="w-full h-20 object-cover"
          />
          <p className="text-gray-200 text-center font-mono text-xs truncate px-1 bg-midnight">
            {project.name}
          </p>
        </button>
      ))}
    </div>
  );
};

export default ProjectsTab;
