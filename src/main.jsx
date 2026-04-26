import React from "react";
import ReactDOM from "react-dom/client";

// 🔥 Language Provider
import { LangProvider } from "./context/LanguageContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";   // ← ضيف السطر ده
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);