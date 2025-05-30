import { create } from 'zustand';

interface AuthState {
    accessToken: string | null;
    auth: boolean;
    isLoading: boolean;
    
    setAccessToken: (token: string | null) => void;
    setAuth: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    auth: false,
    isLoading: true,

    setAccessToken: (token) => set({ accessToken: token }),
    setAuth: (value) => set({ auth: value }),
    setIsLoading: (value) => set({ isLoading: value }),
}));