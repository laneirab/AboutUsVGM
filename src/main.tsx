import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Styles/index.css";
import "./Styles/App.css";
import'./Styles/fonts.css';
import App from "./Pages/App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
