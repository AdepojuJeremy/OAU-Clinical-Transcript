import { useState } from "react";
import "./App.css";
import Upload from "./components/Upload";
import Test from "./components/Test";
import Results from "./components/Results";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import UploadIndividual from "./components/UploadIndividual";
import ResultsPage from "./components/ResultsPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/results" element={<Results />} />
        <Route path="/test" element={<Test />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/upload/:identifier" element={<UploadIndividual />} />
        <Route path="/results/:id" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
