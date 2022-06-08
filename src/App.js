import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profil from "./pages/Profil";
import "./input.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Profil />} />
        </Routes>
      </Router>
    </>
  );
}
