import App from "./App.tsx";
import { StrictMode } from "react";
import { Theme } from "@radix-ui/themes";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);
