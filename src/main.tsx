import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Prefect from "./components/Prefect.tsx";
import README from "../README.md?raw";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container">
      <Prefect className="mypre" mode="light" content={README} />
    </div>
  </StrictMode>,
);
