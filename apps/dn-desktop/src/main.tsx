import React from "react";
import ReactDOM from "react-dom/client";
import AppInterface from "@dn/interface";

const App = () => {
  return <AppInterface />;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
