import React, { lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAuthStore } from "@entities/User";

import { apiWithCookies } from "@shared/api";
import Spinner from "@shared/ui/Spinner";

import { ProtectedRoute } from "./ProtectedRoute";

const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const Registration = lazy(() => import("@pages/Registration"));
const SongList = lazy(() => import("@pages/SongList"));
const Song = lazy(() => import("@pages/Song"));
const AddSong = lazy(() => import("@pages/AddSong"));

export const AppRoutes: React.FC = () => {
  const { setAccessToken, setAuth, setIsLoading } = useAuthStore.getState();
  const isLoading = useAuthStore((state) => state.isLoading);

  useEffect(() => {
    const tryRestoreAuth = async () => {
      try {
        const res = await apiWithCookies.post("/auth/refresh-access-token");
        setAccessToken(res.data.accessToken);
        setAuth(true);
      } catch {
        setAccessToken(null);
        setAuth(false);
      } finally {
        setIsLoading(false);
      }
    };

    tryRestoreAuth();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/songs"
        element={
          <ProtectedRoute>
            <SongList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/songs/:id"
        element={
          <ProtectedRoute>
            <Song />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-song"
        element={
          <ProtectedRoute>
            <AddSong />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
