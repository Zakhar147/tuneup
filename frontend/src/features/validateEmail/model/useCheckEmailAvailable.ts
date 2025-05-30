import { useRef, useMemo, useState } from "react";

import axios from "axios";
import { UseFormSetError, UseFormClearErrors } from "react-hook-form";
import { debounce } from "throttle-debounce";

import { api } from "@shared/api";

import { Inputs } from "@features/registrationSubmit";

export const useCheckEmailAvailable = (
  setError: UseFormSetError<Inputs>,
  clearErrors: UseFormClearErrors<Inputs>
) => {
  const [isValidating, setValidating] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const validateEmail = useMemo(() => debounce(700, async (email: string) => {
    if (!email) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setValidating(true);
    abortControllerRef.current = new AbortController();

    try {
      await api.post(
        "/auth/check-email",
        { email },
        { signal: abortControllerRef.current.signal }
      );
      clearErrors("email");
    } catch (error: any) {
      if (!axios.isCancel(error)) {
        setError("email", {
          type: "manual",
          message: "Email is already taken!",
        });
      }
    } finally {
      setValidating(false);
    }
  }), []);

  return { validateEmail, isValidating };
};