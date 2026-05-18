import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Signup from "./components/Signup";
import HomePage from "./pages/HomePage";
import "./style.css";

function App() {
  const [formData, setFormData] = useState({
    businessType: "",
    investment: "",
    state: "",
    district: "",
    gender: "",
    category: "",
    businessStage: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(prev => {
      if (name === "state") {
        return {
          ...prev,
          state: value,
          district: ""
        };
      }

      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup 
          formValues={formData}
          onChange={handleChange} />} />
        <Route path="/form" element={<Form 
          formValues={formData}
          onChange={handleChange} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;