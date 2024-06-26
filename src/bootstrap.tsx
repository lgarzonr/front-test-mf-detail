import React from "react";
import { createRoot, Container } from "react-dom/client";
import DetailView from "./detail/DetailView";

const mount = (rootElement: Container) => {
  const root = createRoot(rootElement);
  root.render(<DetailView />);
};

export { mount };
