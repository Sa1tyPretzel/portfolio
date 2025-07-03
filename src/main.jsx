import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import initGame from "./initGame";

const ui = document.getElementById("ui");
const root = createRoot(ui);

root.render(<StrictMode>
    <ReactUI />
</StrictMode>);

initGame();