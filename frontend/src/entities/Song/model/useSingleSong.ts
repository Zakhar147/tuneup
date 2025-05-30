import { useEffect, useState } from "react";
import { getSongById } from "./getSongById";
import { Song } from "../types/Songs";

export const useSong = (songId: string) => {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const data = await getSongById(songId);
        setSong(data);
        setError(null);
      } catch (e: any) {
        setError("Couldn't load the song ");
        setSong(null);
      } finally {
        setLoading(false);
      }
    };

    if (songId) {
      fetch();
    }
  }, [songId]);

  return { song, loading, error };
};