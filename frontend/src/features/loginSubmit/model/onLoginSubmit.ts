import { useState } from "react";
import { UseFormClearErrors, UseFormSetError } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@entities/User";
import { Inputs } from "../types/inputs";
import {apiWithCookies } from "@shared/api";
import axios from "axios";

export const useLoginSubmit = (
    setError: UseFormSetError<Inputs>,
    clearErrors: UseFormClearErrors<Inputs>
) => {
    const [loading, setLoading] = useState<Boolean>(false);
    const navigate = useNavigate();
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const setAuth = useAuthStore((state) => state.setAuth);

    const onLoginSubmit = async (data: Inputs) => {
        setLoading(true);
        try {
            console.log('SUBMITED DATA', { login: data.login, password: data.password });

            const response = await apiWithCookies.post("/auth/login", {
                login: data.login,
                password: data.password
            });
            clearErrors("login");
            setAccessToken(response.data.accestoken);
            setAuth(true);
            navigate("/")
        } catch (err: any) {
            if (!axios.isCancel(err)) {
                const message = err.response?.data?.message || "Invalid login";
                setError("root", {
                    type: "manual",
                    message: message,
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return { onLoginSubmit, loading };
};
