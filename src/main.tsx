import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Overview from "@pages/Overview.tsx";
import Revenue from "@pages/Revenue.tsx";
import Analytics from "@pages/Analytics.tsx";
import CRM from "@pages/CRM.tsx";
import Apps from "@pages/Apps.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Overview />} />
      <Route path="revenue" element={<Revenue />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="crm" element={<CRM />} />
      <Route path="apps" element={<Apps />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
