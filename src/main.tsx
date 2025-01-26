import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_Client_ID}` || ""}>
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
);
