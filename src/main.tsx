import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "@/components/ui/provider.tsx";
import "./globals.css";
import LandingPage from "@/pages/LandingPage";
import DocumentationPageLayout from "./layouts/DocumentationPageLayout";
import DocumentationLayout from "./layouts/DocumentationLayout";
import { ComponentsProvider } from "./Providers/ComponentsProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ComponentsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/docs" element={<DocumentationLayout />}>
              <Route
                path="components/:componentName"
                element={<DocumentationPageLayout />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ComponentsProvider>
    </Provider>
  </StrictMode>
);
