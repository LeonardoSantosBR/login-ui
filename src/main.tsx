import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </QueryClientProvider>
);
