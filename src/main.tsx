import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Provider } from "@/components/ui/provider.tsx";
import "./globals.css";
import LandingPage from "@/pages/LandingPage";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import DocumentationPageLayout from "@/layouts/DocumentationPageLayout";
import ComponentsProvider from "./Providers/ComponentsProvider";
import { Toaster } from "@/components/ui/toaster";
import DocumentationOverview from "./components/DocumentationOverview";
import { COMPONENTS_PATH, DOC_PATH, OVERVIEW_PATH } from "./constants/paths";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ComponentsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<LandingPage />} />
            <Route path={`/${DOC_PATH}`} element={<DocumentationLayout />}>
              <Route
                path={`${OVERVIEW_PATH}`}
                element={<DocumentationOverview />}
              />
              <Route
                path={`${COMPONENTS_PATH}/:componentName`}
                element={<DocumentationPageLayout />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ComponentsProvider>
      <Toaster />
    </Provider>
  </StrictMode>
);
