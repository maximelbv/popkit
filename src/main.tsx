import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "@/components/ui/provider.tsx";
import "./globals.css";
import LandingPage from "@/pages/LandingPage";
import DocsLayout from "@/layouts/DocsLayout";
import TestOne from "@/components/test1";
import TestTwo from "@/components/test2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route path="test1" element={<TestOne />} />
            <Route path="test2" element={<TestTwo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
