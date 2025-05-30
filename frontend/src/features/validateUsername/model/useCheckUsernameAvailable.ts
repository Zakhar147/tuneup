import { useRef, useMemo, useState } from "react";
import { UseFormSetError, UseFormClearErrors } from "react-hook-form";
import { debounce } from "throttle-debounce";
import axios from "axios";

import {api} from "@shared/api";

import { Inputs } from "@features/registrationSubmit";

export const useCheckUsernameAvailable = (
  setError: UseFormSetError<Inputs>,
  clearErrors: UseFormClearErrors<Inputs>
) => {
  const [isValidating, setValidating] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const validateUsername = useMemo(() => debounce(700, async (username: string) => {
    if (!username) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setValidating(true);
    abortControllerRef.current = new AbortController();

    try {
      console.log("requesitng...")

      await api.post(
        "/auth/check-username",
        { username },
        { signal: abortControllerRef.current.signal }
      );
      clearErrors("username");
    } catch (error: any) {
      if (!axios.isCancel(error)) {
        setError("username", {
          type: "manual",
          message: "Username is already taken!",
        });
      }
    } finally {
      setValidating(false);
    }
  }), []);

  return { validateUsername, isValidating };
};