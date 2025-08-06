// src/components/Inspector.tsx
import React from "react";

export interface Project {
  name: string;
  description?: string;
  video: string;
  tools: string[];
  github: string;
  demo: string;
  [key: string]: any; // Optional: allows for extra fields
}

interface InspectorProps {
  project: Project;
}

const Inspector: React.FC<InspectorProps> = ({ project }) => {
  return (
    <div className="bg-midnight rounded-lg p-4 text-gray-200 font-mono text-sm flex flex-col gap-3 max-w-xs h-full">
      <h3 className="text-lg font-bold border-b border-gray-600 pb-1">
        Inspector
      </h3>
      <div>
        <div className="font-semibold">Tools Used:</div>
        <ul className="list-disc list-inside">
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-3 pt-2">
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
  );
};

export default Inspector;
