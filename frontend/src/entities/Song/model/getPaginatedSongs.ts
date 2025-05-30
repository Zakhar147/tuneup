import { api } from "@shared/api";

export const getPaginatedSongs = async (page: number, size = 9) => {
  const res = await api.get(`/songs/paged?page=${page}&size=${size}`);
  return res.data;
};