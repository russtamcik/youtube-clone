import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { AppContextProvider } from "./contexts/context.jsx";
import { DataProvider } from "./contexts/data.jsx";
import { SearchContext } from "./contexts/search.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <DataProvider>
      <SearchContext>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SearchContext>
    </DataProvider>
  </AppContextProvider>
);
