export type Step = 'register' | 'verify' | 'success';

export interface RegistrationState {
  step: Step;
  loading: boolean;
  verifyEmail: string;
  setStep: (step: Step) => void;
  setLoading: (loading: boolean) => void;
  setVerifyEmail: (verifyEmail: string) => void;
}