import React, { useState } from "react";
import Locations from "../data/locations";

function Form() {

  const [formData, setFormData] = useState({
    Signup: "",
    businessType: "",
    investment: "",
    state: "",
    district: "",
    gender: "",
    Category: "",
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

  const selectedState = Locations.find(
    (item) => item.state === formData.state
  );

  return (
    <form action="/form">
    <div>
      <div>
        <label htmlFor="flname">
          What is your name?
        </label>

        <input
          type="text"
          placeholder="Enter Name"
          value={formData.Signup}
          onChange={handleChange}
        />

        <label htmlFor="flname">
          Enter Your Phone Number
        </label>

        <input
          type="text"
          placeholder="Enter Phone"
          value={formData.Signup}
          onChange={handleChange}
        />

        <label htmlFor="flname">
          Enter your E-mail
        </label>

        <input
          type="text"
          placeholder="Enter e-mail"
          value={formData.Signup}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="business">
          What type of business do you have?
        </label>

        <select
          id="business"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
        >
          <option value="businessType">
            Select business type
          </option>

          <option value="manufacturing">
            Manufacturing
          </option>

          <option value="service">
            Service
          </option>

          <option value="trading">
            Trading
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="investment">
          What is your investment amount (₹)?
        </label>

        <input
          id="investment"
          type="number"
          name="investment"
          value={formData.investment}
          onChange={handleChange}
          placeholder="Enter amount"
        />
      </div>

      <div>
        <label>Select State</label>

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Select State</option>

          {Locations.map((item) => (
            <option key={item.id} value={item.state}>
              {item.state}
            </option>
          ))}
        </select>

        <label>Select District</label>

        <select
          name="district"
          value={formData.district}
          onChange={handleChange}
        >
          <option value="">Select District</option>

          {selectedState &&
            selectedState.districts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))
          }
        </select>
      </div>

      <div className="container">

        <div>
          <label>Gender:</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Category:</label>

          <select
            name="category"
            value={formData.Category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>
        </div>

        <div>
          <label>Business Stage:</label>

          <select
            name="businessStage"
            value={formData.businessStage}
            onChange={handleChange}
          >
            <option value="">Select Stage</option>
            <option value="New">New</option>
            <option value="Existing">Existing</option>
          </select>
        </div>

      </div>

      <p>{JSON.stringify(formData)}</p>

    </div>
    </form>
  );
}

export default Form;