import { useState } from "react";
import "./App.css";
import Upload from "./pages/Upload";
import Test from "./pages/Test";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import UploadIndividual from "./pages/UploadIndividual";
import ResultsPage from "./pages/ResultsPage";

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
