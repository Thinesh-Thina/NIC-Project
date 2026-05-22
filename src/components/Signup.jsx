import React, { useState } from "react";
import "../signup.css";

function Signup() {

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    MobileNumber: "",
    password: "",
    ConfirmPassword: "",
    email: "",
    Checkbox: true
  });

  const [formErrors, setFormErrors] = useState({});

  const validating = {
    firstName: v => (!v ? "First name is required" : null),
    lastName: v => (!v ? "Last name is required" : null),
    MobileNumber: v =>
      (!v || v.length < 10 ? "Invalid Phone Number" : null),
    gender: v => (!v ? "Gender is required" : null),
    password: v =>
      (v.length < 8 ? "Password must be at least 8 characters" : null),
    ConfirmPassword: v =>
      (v !== formValues.password ? "Passwords do not match" : null),
    email: v =>
      (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "Email is invalid"),
    Checkbox: v =>
      (!v ? "Accept Terms and Conditions" : null)
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormValues(prev => ({
      ...prev,
      [name]: newValue
    }));
  }

async function handleSubmit(e) {
  e.preventDefault();

  const errors = {};

  Object.keys(validating).forEach(key => {
    const error = validating[key](formValues[key]);
    if (error) errors[key] = error;
  });

  setFormErrors(errors);

  if (Object.keys(errors).length === 0) {
    try {
      await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
      });

      alert("Signup successful");

    } catch (err) {
      console.log(err);
    }
  }
}

  return (
    <div className="signup-page">
    <form onSubmit={handleSubmit}>

      <h2>Signup</h2>

      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
        <p>{formErrors.firstName}</p>
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
        />
        <p>{formErrors.lastName}</p>
      </div>

      <div>
        <label>Mobile Number</label>
        <input
          type="text"
          name="MobileNumber"
          value={formValues.MobileNumber}
          onChange={handleChange}
        />
        <p>{formErrors.MobileNumber}</p>
      </div>

      <div>
        <label>Gender</label>
        <select
          name="gender"
          value={formValues.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p>{formErrors.gender}</p>
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="ConfirmPassword"
          value={formValues.ConfirmPassword}
          onChange={handleChange}
        />
        <p>{formErrors.ConfirmPassword}</p>
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="Checkbox"
            checked={formValues.Checkbox}
            onChange={handleChange}
          />
          Accept Terms and Conditions
        </label>
        <p>{formErrors.Checkbox}</p>
      </div>

      <button type="submit">Submit</button>

    </form>
    </div>
  );
};
export default Signup;