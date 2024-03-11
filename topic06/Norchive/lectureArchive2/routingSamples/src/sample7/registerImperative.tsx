import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterImperative = props => {
  const navigate = useNavigate()

  const handleSubmit = user => {
    // save user to datastore
    navigate("/");
  };

  return (
    <>
      <h2>Registration Form</h2>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default RegisterImperative;
