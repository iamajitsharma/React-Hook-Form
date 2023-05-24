import React, { useState } from "react";
import Input from "./Input";
const LoginForm = () => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [qualification, setQualification] = useState("");
  // const [designation, setDesignation] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    qualification: "",
    designation: "",
  });

  // const onNameChangeHandler = (e) => {
  //   setFullName(e.target.value);
  // };
  // const onEmailChangeHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // const onQualificationChangeHandler = (e) => {
  //   setQualification(e.target.value);
  // };
  // const onDesignationChangeHandler = (e) => {
  //   setDesignation(e.target.value);
  // };
  const onChangeHandler = (e) => {
    formData.fullName = e.target.value;
    formData.email = e.target.value;
    formData.qualification = e.target.value;
    formData.designation = e.target.value;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setFormData(data => );
  };

  console.log(formData);

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center bg-white shadow-lg max-w-xl w-full min-h-min py-4 p-4">
        <h4 className="text-2xl font-semibold text-neutral-800 py-4">
          Job Application Form
        </h4>
        <form
          className="flex flex-col gap-4 w-full p-2"
          onSubmit={onSubmitHandler}
        >
          <input
            type="text"
            placeholder="Enter your full name"
            className="p-2 text-lg text-neutral-900 bg-gray-100"
            value={formData.fullName}
            onChange={onChangeHandler}
          />
          <input
            type="email"
            placeholder="Enter your email id"
            className="p-2 text-lg text-neutral-900 bg-gray-100"
            value={formData.email}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Qualifiation"
            className="p-2 text-lg text-neutral-900 bg-gray-100"
            value={formData.qualification}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Current Designation"
            className="p-2 text-lg text-neutral-900 bg-gray-100"
            value={formData.designation}
            onChange={onChangeHandler}
          />

          <button
            type="submit"
            className="py-2 px-4 bg-red-400 text-lg font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
