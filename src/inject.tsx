import "./app.css";
// @jsx
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createRoot } from "react-dom/client";

export const inject = (cache: EmotionCache, App: JSX.ElementType) => {
  setTimeout(() => {
    const styles = cache.sheet.tags.map((tag) => tag.innerHTML).join("\n");
    const element = document.querySelector("#styles");
    if (element instanceof HTMLElement) element.innerText = styles;
  }, 1);

  const app = document.getElementById("app");
  if (!app) throw Error("No #app node");
  const root = createRoot(app);

  root.render(
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>
  );
};
