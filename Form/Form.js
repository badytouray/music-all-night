import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import Brazil from "../../massage.jpg";
import Footer from "../Footer/Footer";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src={Brazil} alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Form;
