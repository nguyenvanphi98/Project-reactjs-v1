import React, { useState } from "react";
import FormRegister from "./FormRegister";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  function submitForm() {
    setSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? (
        <FormRegister submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </div>
  );
};

export default Form;
