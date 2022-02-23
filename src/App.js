/* eslint-disable no-unused-vars */
import { Header, Hero, SidebarLeft } from "./components";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <SidebarLeft />
        <Header />
        <Hero />
      </Router>
    </>
  );
}

export default App;
