import { create } from "zustand";

import { RegistrationState } from "../types/store";

export const useRegistrationStore = create<RegistrationState>((set, get) => ({
    step: 'register',
    loading: false,
    verifyEmail: '',
    setStep: (step) => set({step}),
    setLoading: (loading) => set({loading}),
    setVerifyEmail: (verifyEmail) => set({verifyEmail}),
})) 