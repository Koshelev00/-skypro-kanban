import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import NotFoundPage from "./Pages/NotFoundPage";
import PrivateRoute from "../PrivateRoute";
import ExitPage from "./Pages/ExitPage";
import CardPage from "./Pages/CardPage";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (token) setIsAuth(true);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth.toString());
  }, [isAuth]);

  return (
    <Routes>
      <Route path="/signIn" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/signUp" element={<SignUpPage />} />

      <Route element={<PrivateRoute isAuth={isAuth} isLoading={loading} />}>
        <Route index element={<MainPage loading={loading} />} />
        <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
