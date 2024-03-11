import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function() {
  const [toHome, setToHome] = useState(false);

  const handleSubmit = user => {
    // save user to datastore
    setToHome(true);
  };

  if (toHome === true) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h2>Registration Form</h2>
      <button onClick={handleSubmit}>Register</button>
    </>
  );
};
