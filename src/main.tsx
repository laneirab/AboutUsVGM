import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Styles/index.css";
import App from "./Pages/App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
