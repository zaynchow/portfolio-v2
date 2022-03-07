import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { Home, Resume } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
