import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider, useProducts } from "./Context/ProductContext.jsx";

const Load = () => {
  const { loading } = useProducts();

  if (loading) {
    return (
      <div className="flex items-center justify-items-center text-3xl">
        Loading...
      </div>
    );
  }

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <Load />
    </ProductProvider>
  </React.StrictMode>,
);
