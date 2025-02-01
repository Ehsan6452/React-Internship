import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [fNameData, setFNameData] = useState('');
  const [lNameData, setLNameData] = useState('');
  const [emailData, setEmailData] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTxtValid, setIsTxtValid] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (fNameData.length !== 0 && lNameData.length !== 0 && emailData.length !== 0) {
      setIsTxtValid(true);
      setTimeout(() => setIsTxtValid(false), 3000);
    }
  };

  const setValue = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'FName':
        setFNameData(value);
        break;
      case 'LName':
        setLNameData(value);
        break;
      case 'Email':
        setEmailData(value);
        break;
      default:
        break;
    }
  };

  return (
    <section className="Form">
      <form className="form-box" onSubmit={submitHandler}>
        {isSubmitted && isTxtValid && <div className="ValidText">All valid</div>}

        <input
          name="FName"
          type="text"
          value={fNameData}
          onChange={setValue}
          placeholder="Enter your first name..."
          className="FName txt"
        />
        {isSubmitted && fNameData.length === 0 && (
          <p className="ErrorMessage">Please Enter Your First Name...</p>
        )}

        <input
          name="LName"
          type="text"
          value={lNameData}
          onChange={setValue}
          placeholder="Enter your last name..."
          className="lName txt"
        />
        {isSubmitted && lNameData.length === 0 && (
          <p className="ErrorMessage">Please Enter Your Last Name...</p>
        )}

        <input
          name="Email"
          type="text"
          value={emailData}
          onChange={setValue}
          placeholder="Enter your email address..."
          className="Email txt"
        />
        {isSubmitted && emailData.length === 0 && (
          <p className="ErrorMessage">Please Enter Your Email Address...</p>
        )}

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;