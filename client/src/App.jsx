import React from "react";
import {  Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Events from "./pages/Events"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
