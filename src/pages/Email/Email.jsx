import React from "react";
import { useParams } from "react-router-dom";

const Email = () => {
  const { emailId } = useParams();

  return (
    <>
      <h1>Email {emailId}</h1>
    </>
  );
};

export default Email;
