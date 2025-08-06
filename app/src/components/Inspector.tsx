// src/components/Inspector.tsx
import React from "react";
import { Project } from "../pages/ProjectsPage";

interface InspectorProps {
  project: Project;
}

const Inspector: React.FC<InspectorProps> = ({ project }) => {
  return (
    <div className="w-full">
      <p className="text-sm text-gray font-mono bg-midnight border-2 border-lavender border-b-0 px-3 py-1 rounded-t-lg inline-block">
        Details
      </p>
      <div className="bg-midnight rounded-tr-lg rounded-br-lg rounded-bl-lg p-4 text-gray-200  text-sm flex flex-col gap-3 h-full border-lavender border-2">
        <div className="font-bold">
          <h1>{project.name}</h1>
        </div>

        {project.contributions && project.contributions.length > 0 && (
          <div>
            <div className="font-semibold font-mono">Contributions:</div>
            <ul className="list-disc list-inside pl-4">
              {project.contributions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <div className="font-semibold font-mono">Tools Used:</div>
          <ul className="list-disc list-inside">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-3 pt-2 font-mono">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blush underline hover:text-blush/70"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blush underline hover:text-blush/70"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inspector;
