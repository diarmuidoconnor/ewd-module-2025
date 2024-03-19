import React from "react";
import { useNavigate } from "react-router-dom";

interface User {
  // Define the properties of the User interface
}

const RegisterImperative: React.FC<User> = (user) => {
  const navigate = useNavigate();

  const handleSubmit = (user: User) => {
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
