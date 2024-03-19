import React, { useState } from "react";
import { Navigate } from "react-router-dom";

interface User {
  // Define the properties of the User interface
}

const RegisterDeclarative: React.FC<User> = (user) => {
  const [toHome, setToHome] = useState(false);

  const handleSubmit = (user: User) => {
    // save user to datastore
    setToHome(true);
  };

  if (toHome === true) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h2>Registration Form</h2>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default RegisterDeclarative;