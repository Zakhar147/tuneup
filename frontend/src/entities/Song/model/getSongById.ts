import { api } from "@shared/api";

export const getSongById = async (songId: string) => {
  const res = await api.get(`/songs/${songId}`);
  return res.data;
};