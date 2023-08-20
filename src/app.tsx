import React from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./Router";

const container = document.getElementById("app");

if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

root.render(
  <AppRouter />,
);