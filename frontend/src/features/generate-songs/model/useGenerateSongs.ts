import { useState } from "react";

import { api, apiWithCookies } from "@shared/api";

export const useGenerateSongs = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const generateSongs = async () => {
    if (isGenerated) return;

    setIsGenerating(true);
    try {
      await api.post('songs/generate');
      setIsGenerated(true);
    } catch (error) {
      console.error("Error while generating songs:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generateSongs,
    isGenerating,
    isGenerated,
  };
};
