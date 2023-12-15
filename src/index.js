import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import SignUp from "./SignUp";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<App/>}/>
      </Routes>
      <Routes>
          <Route exact path="/register" element={<SignUp/>}/>
      </Routes>
  </BrowserRouter>
  </StrictMode>
);
