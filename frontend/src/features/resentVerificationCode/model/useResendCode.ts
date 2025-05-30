import { useState, useEffect } from "react";

import {api} from "@shared/api";

export const useResendCode = (email: string) => {
  const [cooldown, setCooldown] = useState(60);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => setCooldown((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const resendCode = async () => {
    console.log("resendCode called", email);
    setLoading(true);
    try {
      const response = await api.post("auth/registration/resendCode", {
        email,
      });

      console.log("Response:", response.data);
      setCooldown(60);
    } catch (e) {
      console.error("Resend failed", e);
    } finally {
      setLoading(false);
    }
  };

  return {
    resendCode,
    cooldown,
    loading,
    canResend: cooldown === 0 && !loading,
  };
};