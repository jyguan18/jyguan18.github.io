// src/components/SceneView.tsx
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../pages/ProjectsPage";

interface SceneViewProps {
  project: Project;
}

const SceneView: React.FC<SceneViewProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.name}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="bg-lavender/50 rounded-lg overflow-hidden flex flex-col relative"
      >
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
          <div className="flex space-x-2 pointer-events-auto">
            <button
              onClick={handlePlay}
              aria-label="Play"
              className="bg-midnight hover:bg-blush text-white hover:text-midnight px-3 py-0.5 rounded text-xs font-semibold shadow-sm cursor-pointer transition flex"
            >
              <svg
                className="w-4 h-4 text-mint mr-1 text-inherit"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
              Play
            </button>
            <button
              onClick={handlePause}
              aria-label="Pause"
              className="bg-midnight hover:bg-blush text-white hover:text-midnight px-3 py-0.5 rounded text-xs font-semibold shadow-sm cursor-pointer transition flex"
            >
              <svg
                className="w-4 h-4 text-mint mr-1 text-inherit"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 4a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1zm7 0a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Pause
            </button>
          </div>
        </div>

        <video
          ref={videoRef}
          src={project.video}
          autoPlay
          muted
          loop
          className="w-full h-72 object-cover"
          playsInline
        />
        <div className="p-4 text-gray-100 font-mono text-sm">
          <h2 className="text-xl font-bold mb-2">{project.name}</h2>
          <p>{project.description}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SceneView;
