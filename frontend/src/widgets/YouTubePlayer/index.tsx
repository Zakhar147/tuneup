import React from "react";
import ReactPlayer from "react-player/youtube";

import { extractVideoId } from "@features/extractVideoUrl";

interface YouTubePlayerProps {
  url: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url }) => {
  const videoId = extractVideoId(url);
  const embedUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : "";

  if (!videoId) {
    return <p className="text-red-500">Invalid YouTube URL</p>;
  }

  return (
    <div
      className="
        border-[2px] border-[#FF6C00] rounded-[6px]
        p-[2px] bg-[#1a1a1a] shadow-md
        w-full max-w-[800px] aspect-video
      "
    >
      <ReactPlayer
        url={embedUrl}
        width="100%"
        height="100%"
        controls
        style={{ borderRadius: "4px", overflow: "hidden" }}
      />
    </div>
  );
};

export default YouTubePlayer;