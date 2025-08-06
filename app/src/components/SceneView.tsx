// Scrollable gallery with thumbnails for multiple photos
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../pages/ProjectsPage";

interface SceneViewProps {
  project: Project;
}

const SceneView: React.FC<SceneViewProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const hasPhotos = Array.isArray(project.photos) && project.photos.length > 0;
  const hasVideo =
    typeof project.video === "string" && project.video.length > 0;

  const galleryItems = [
    ...(hasPhotos ? project.photos! : []),
    ...(hasVideo ? [project.video!] : []),
  ];

  const isVideo = (src: string) =>
    typeof src === "string" && /\.(mp4|webm|ogg)$/i.test(src);

  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.name}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="bg-lavender/50 rounded-lg overflow-hidden flex flex-col relative max-w-full mx-auto border-2 border-lavender"
      >
        {/* Gallery */}
        <div className="relative w-full">
          {isVideo(galleryItems[currentIndex]) ? (
            <>
              <div className="flex justify-center space-x-2 p-2">
                <button
                  onClick={handlePlay}
                  aria-label="Play"
                  className="bg-blush/80 hover:bg-blush text-midnight hover:text-midnight px-3 py-0.5 rounded text-xs font-semibold shadow-sm cursor-pointer transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 text-midnight mr-1"
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
                  className="bg-blush/80 hover:bg-blush text-midnight hover:text-midnight px-3 py-0.5 rounded text-xs font-semibold shadow-sm cursor-pointer transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 text-midnight mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
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
              <video
                ref={videoRef}
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                controls
                onClick={() => videoRef.current?.play()}
                className="w-full max-h-[50vh] object-contain mx-auto"
              />
            </>
          ) : (
            <>
              <div className="flex justify-center space-x-2 p-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="bg-blush/80 hover:bg-blush text-midnight hover:text-midnight px-2 pr-3 py-0.5 rounded text-xs font-semibold shadow-sm cursor-pointer transition flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4 text-midnight"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* Left arrow */}
                    <path d="M12 4l-6 6 6 6V4z" />
                  </svg>
                  Prev
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="bg-blush/80 hover:bg-blush text-midnight hover:text-midnight px-2 pl-3 py-0.5 rounded text-xs font-semibold shadow-sm cursor-pointer transition flex items-center gap-1"
                >
                  Next
                  <svg
                    className="w-4 h-4 text-midnight"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* Right arrow */}
                    <path d="M8 4l6 6-6 6V4z" />
                  </svg>
                </button>
              </div>
              <img
                src={galleryItems[currentIndex]}
                alt={`${project.name} image ${currentIndex + 1}`}
                className="w-full object-contain max-h-[50vh] mx-auto cursor-pointer"
                onClick={() => {
                  console.log("Image clicked");
                  setShowModal(true);
                }}
              />
            </>
          )}
        </div>

        {/* Description */}
        <div className="p-4 text-gray-100 font-mono text-sm">
          <h2 className="text-xl font-bold mb-2">{project.name}</h2>
          <p>{project.description}</p>
        </div>

        <AnimatePresence>
          {showModal && !isVideo(galleryItems[currentIndex]) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 flex items-center justify-center"
              onClick={() => setShowModal(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full h-full"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-white p-2 text-xl z-50 hover:text-blush"
                >
                  ✕
                </button>

                {/* Fullscreen Image */}
                <img
                  src={galleryItems[currentIndex]}
                  alt="Full size"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default SceneView;
