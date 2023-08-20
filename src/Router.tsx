import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Todo } from "./pages/Todo";
import { ROUTES } from "@/utils/constants";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.todo} element={<Todo />} />
        <Route path="*" element={<Navigate to={ROUTES.home} />} />
      </Routes>
    </BrowserRouter>
  );
};
