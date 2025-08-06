// ProjectsTab.tsx

import React from "react";
import type { Project } from "../pages/ProjectsPage";

interface ProjectsTabProps {
  projects: Project[];
  selected: Project;
  onSelect: (project: Project) => void;
  selectedCategory: string;
}

function isExternalVideo(url: string | undefined): boolean {
  return (
    !!url &&
    (url.includes("vimeo.com") ||
      url.includes("youtube.com") ||
      url.includes("youtu.be"))
  );
}

function getVideoThumbnail(url: string): string | null {
  if (url.includes("vimeo.com")) {
    return getVimeoThumbnail(url);
  }
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return getYouTubeThumbnail(url);
  }
  return null;
}

function getVimeoThumbnail(url: string): string | null {
  // Extract video ID from URL
  const match = url.match(/vimeo\.com\/(\d+)/);
  if (match) {
    const videoId = match[1];
    // Vimeo thumbnail URL pattern (this is unofficial but works for many cases)
    return `https://vumbnail.com/${videoId}.jpg`;
  }
  return null;
}

function getYouTubeThumbnail(url: string): string | null {
  const regex =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    const videoId = match[1];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
  return null;
}

const ProjectsTab: React.FC<ProjectsTabProps> = ({
  projects,
  selected,
  onSelect,
  selectedCategory,
}) => {
  return (
    <div className="w-full px-2 sm:px-4">
      <p className="text-sm sm:text-base text-gray font-mono bg-lavender px-3 py-1 rounded-t-lg inline-block">
        Projects | {selectedCategory}
      </p>

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
            {project.video && isExternalVideo(project.video) ? (
              <div className="relative w-full h-16 sm:h-20 rounded overflow-hidden">
                <img
                  src={getVideoThumbnail(project.video) ?? "fallback-image.jpg"}
                  alt={`${project.name} video thumbnail`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-8 h-8 text-blush opacity-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </div>
              </div>
            ) : project.video ? (
              <video
                src={project.video}
                muted
                loop
                playsInline
                className="w-full h-16 sm:h-20 object-cover rounded"
              />
            ) : null}

            {project.photos && project.photos.length > 0 && (
              <div className="flex space-x-1">
                <img
                  src={project.photos[0]}
                  alt={`${project.name} photo 1`}
                  className="w-full h-full sm:h-20 object-cover"
                />
              </div>
            )}

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
