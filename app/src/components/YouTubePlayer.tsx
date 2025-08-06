import React, { useEffect, useRef, useState } from "react";

interface YouTubePlayerProps {
  video: string; // YouTube video URL or ID
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ video }) => {
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Extract video ID from URL or accept ID directly
  const getVideoId = (urlOrId: string) => {
    const regex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = urlOrId.match(regex);
    return match ? match[1] : urlOrId;
  };

  const videoId = getVideoId(video);

  // Load YouTube IFrame API script only once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setIsReady(true);
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      setIsReady(true);
    };
  }, []);

  // Create or update player when ready or video changes
  useEffect(() => {
    if (!isReady) return;

    if (playerRef.current) {
      playerRef.current.loadVideoById(videoId);
    } else if (iframeRef.current) {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          mute: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
        },
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isReady, videoId]);

  const handlePlay = () => {
    playerRef.current?.playVideo();
  };

  const handlePause = () => {
    playerRef.current?.pauseVideo();
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
        <div
          ref={iframeRef}
          className="absolute top-0 left-0 w-full h-full"
          id="youtube-player"
        />
      </div>
    </>
  );
};

export default YouTubePlayer;
