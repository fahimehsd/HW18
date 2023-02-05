import React, { useState } from "react";
import "./SignUpForm.css";
const SignUpForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formInfo);
  };
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checked: false
  });
  return (
    <div className="formContainer">
      <form onSubmit={submitHandler}>
        <h1>Create account</h1>
        <p>
          Already have an account? <a href="#">Sign in</a>
        </p>
        <div className="input-fields">
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => {
              setFormInfo((prev) => {
                return {
                  ...prev,
                  firstName: e.target.value
                };
              });
            }}
          />
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) => {
              setFormInfo((prev) => {
                return {
                  ...prev,
                  lastName: e.target.value
                };
              });
            }}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setFormInfo((prev) => {
                return {
                  ...prev,
                  email: e.target.value
                };
              });
            }}
          />

          <button type="submit">Sign Up</button>

          <input
            type="checkbox"
            onChange={(e) => {
              setFormInfo((prev) => {
                return {
                  ...prev,
                  checked: !formInfo.checked
                };
              });
            }}
          />
          <label>
            I have read and agree to the <a href="#">Term Of Service</a>.
          </label>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
