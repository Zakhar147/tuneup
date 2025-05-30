import { useEffect, useState } from "react";
import { getPaginatedSongs } from "./getPaginatedSongs";
import { Song } from "../types/Songs";

export const usePaginatedSongs = (page: number, size = 9) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await getPaginatedSongs(page, size);
      setSongs(data.content);
      setTotalPages(data.totalPages);
      setLoading(false);
    };
    fetch();
  }, [page]);

  return { songs, totalPages, loading };
};