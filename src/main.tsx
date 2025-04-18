import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./globals.css";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import DocumentationPageLayout from "@/layouts/DocumentationPageLayout";
import ComponentsProvider from "./providers/ComponentsProvider";
import {
  ABOUT_PATH,
  COMPONENTS_PATH,
  DOC_PATH,
  OVERVIEW_PATH,
} from "./constants/paths";
import { Provider } from "./components/docs/chakra/provider";
import { Toaster } from "./components/docs/chakra/toaster";
import DocumentationOverview from "./components/docs/DocumentationOverview";
import ScrollToTop from "./utils/scroll-to-top";
import { Analytics } from "@vercel/analytics/react";
import DocumentationAbout from "./components/docs/DocumentationAbout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <Provider>
      <ComponentsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="*"
              element={
                <Navigate to={`/${DOC_PATH}/${OVERVIEW_PATH}`} replace />
              }
            />
            <Route path={`/${DOC_PATH}`} element={<DocumentationLayout />}>
              <Route
                index
                element={<Navigate to={`${OVERVIEW_PATH}`} replace />}
              />
              <Route
                path={`${OVERVIEW_PATH}`}
                element={<DocumentationOverview />}
              />
              <Route path={`${ABOUT_PATH}`} element={<DocumentationAbout />} />
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
