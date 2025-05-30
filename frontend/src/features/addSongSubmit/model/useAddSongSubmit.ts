import { useState } from "react";
import { UseFormClearErrors, UseFormSetError } from "react-hook-form";

import { Inputs } from "../types/Inputs";
import { createSongFormData } from "./createSongFormData";

import { api } from "@shared/api";
import { useNavigate } from "react-router-dom";

export const useAddSongSubmit = (
    setError: UseFormSetError<Inputs>,
    clearErrors: UseFormClearErrors<Inputs>
) => {
    const [loading, setLoading] = useState<Boolean>(false);
    const navigate = useNavigate();

    const onAddSongSubmit = async (data: Inputs) => {
        setLoading(true);

        try {
            const formData = createSongFormData(data);

            console.log('FORM DATA:  ', formData);

            await api.post("/songs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            clearErrors();
            navigate("/songs");
        } catch (error) {
            console.error("Ошибка при отправке песни:", error);
        } finally {
            setLoading(false);
        }
    }


    return { onAddSongSubmit, loading }
}