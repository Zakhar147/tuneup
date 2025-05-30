import { useMemo, useRef, useState } from "react";
import { UseFormSetError, UseFormClearErrors } from "react-hook-form";
import { debounce } from "throttle-debounce";
import axios from "axios";

import { useRegistrationStore } from "@features/registrationSubmit";

import {api} from "@shared/api";

import { Inputs } from "../types/inputs";

export const useValidateVerificationCode = (
    setError: UseFormSetError<Inputs>,
    clearErrors: UseFormClearErrors<Inputs>,
) => {
    const [loading, setLoading] = useState<boolean>(false);
    const abortControllerRef = useRef<AbortController | null>(null);
    const { setStep, setVerifyEmail } = useRegistrationStore.getState();

    const validateCode = useMemo(() => debounce(700, async (verificationCode: string, email: string) => {
        if (!verificationCode || !email) {
            setLoading(false);
            return;
        }

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();

        setLoading(true);
        try {
            const response = await api.post(
                "/auth/registration/verify",
                { email, verificationCode },
                { signal: abortControllerRef.current.signal });

            console.log("response", response.data)

            if (response.status === 200) {
                clearErrors("verifyCode");
                setStep("success");
                setVerifyEmail("");
            }
        } catch (error: any) {
            if (!axios.isCancel(error)) {
                const message = error.response?.data?.message || "Invalid verification code";
                setError("verifyCode", {
                    type: "manual",
                    message: message,
                });
            }
        } finally {
            setLoading(false);
        }
    }), []);

    return { validateCode, loading };
};