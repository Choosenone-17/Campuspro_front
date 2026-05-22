import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import SavedProvider from "./context/SavedContext";
import CompareProvider from "./context/CompareContext";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <BrowserRouter>

      <SavedProvider>

        <CompareProvider>

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#111827",
                color: "#fff",
                border:
                  "1px solid rgba(255,255,255,0.08)"
              }
            }}
          />

          <App />

        </CompareProvider>

      </SavedProvider>

    </BrowserRouter>

  </React.StrictMode>
);