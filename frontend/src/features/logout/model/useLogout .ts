import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@entities/User";
import { apiWithCookies } from "@shared/api";

export const useLogout = () => {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setAuth = useAuthStore((state) => state.setAuth);

  const onLogout = async () => {
    try {
      await apiWithCookies.post("/auth/logout");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setAccessToken(null);
      setAuth(false);
      navigate("/");
    }
  };

  return { onLogout };
};
