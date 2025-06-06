import React from "react";

import { useGenerateSongs } from "../model/useGenerateSongs";

export const GenerateSongsButton: React.FC = () => {
  const { generateSongs, isGenerating, isGenerated } = useGenerateSongs();

  return (
    <button
      onClick={generateSongs}
      disabled={isGenerating || isGenerated}
      className="md:max-w-[250px] py-[8px] px-[28px] border border-accent rounded-[15px] text-textMain dark:text-dark-textMain font-bold text-[16px] mt-[25px]"
    >
      {isGenerated ? "Songs Generated reload the page" : isGenerating ? "Generating..." : "Generate Songs for test"}
    </button>
  );
};
