import { useRef, useMemo, useState } from "react";
import { UseFormSetError, UseFormClearErrors } from "react-hook-form";
import { debounce } from "throttle-debounce";
import axios from "axios";

import {api} from "@shared/api";

import { Inputs } from "@features/loginSubmit";

export const useLoginExistenceValidation = (
  setError: UseFormSetError<Inputs>,
  clearErrors: UseFormClearErrors<Inputs>
) => {
  const [isValidating, setValidating] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const validateLogin = useMemo(() => debounce(700, async (login: string) => {
    if (!login) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setValidating(true);
    abortControllerRef.current = new AbortController();

    try {
      console.log("requesitng...")

      await api.post(
        "/auth/check-login",
        { login },
        { signal: abortControllerRef.current.signal }
      );
      clearErrors("login");
    } catch (error: any) {
      if (!axios.isCancel(error)) {
        const message = error.response?.data?.message || "Invalid login";
        setError("login", {
          type: "manual",
          message: message,
        });
      }
    } finally {
      setValidating(false);
    }
  }), []);

  return { validateLogin, isValidating };
};