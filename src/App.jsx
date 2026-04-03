import React, { useState } from "react";
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
    <div>
      <HomePage />

      <Signup 
        formValues={formData}
        onChange={handleChange}
      />

      <Form
        formValues={formData}
        onChange={handleChange}
      />

      <p>{JSON.stringify(formData)}</p>
    </div>
  );
}

export default App;