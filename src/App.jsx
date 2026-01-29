import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Collection from "./pages/Collection";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter basename="/perfumebliss">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
