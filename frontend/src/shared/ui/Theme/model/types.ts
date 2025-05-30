export type Theme = "light" | "dark";

export interface TehemeStore {
    theme: Theme,
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void
}