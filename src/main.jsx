import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProviderUnsplash } from "./unsplash-images/ContextUnsplash";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderUnsplash>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ProviderUnsplash>
);
