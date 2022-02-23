/* eslint-disable no-unused-vars */
import { Header, Hero, SidebarLeft, SidebarRight } from "./components";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <SidebarLeft />
        <SidebarRight />
        <Header />
        <Hero />
        <About />
      </Router>
    </>
  );
}

export default App;
