import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home, Resume } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Route path="" element={<Navigate to="/" />} />
    </BrowserRouter>
  );
}

export default App;
