import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app/styles/index.css";
import { App } from "./app";

//TODO: Создать роутинг и компонент Layout

createRoot(document.getElementById("root")!).render(<App />);
