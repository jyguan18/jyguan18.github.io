import React, { useEffect, useRef } from "react";
import Player from "@vimeo/player";

interface VimeoPlayerProps {
  video: string;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ video }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      playerRef.current = new Player(iframeRef.current);

      playerRef.current.play().catch(() => {});
    }

    return () => {
      playerRef.current = null;
    };
  }, [video]);

  const handlePlay = () => {
    playerRef.current?.play();
  };

  const handlePause = () => {
    playerRef.current?.pause();
  };

  return (
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
      <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-3xl mx-auto">
        <iframe
          ref={iframeRef}
          src={
            video
              ?.replace("vimeo.com", "player.vimeo.com/video")
              .split("?")[0] + "?autoplay=1&muted=1"
          }
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default VimeoPlayer;
