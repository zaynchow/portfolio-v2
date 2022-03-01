import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Resume } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
