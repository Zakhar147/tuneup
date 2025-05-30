import { create } from 'zustand';

type ViewType = 'text' | 'tabs';

interface SongMaterialStore {
  view: ViewType;
  setView: (v: ViewType) => void;
}

export const useSongMaterialStore = create<SongMaterialStore>((set) => ({
  view: 'text',
  setView: (v) => set({ view: v }),
}));
