import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => console.log(data);

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center bg-white shadow-lg max-w-xl w-full min-h-min py-4 p-4">
        <h4 className="text-2xl font-semibold text-neutral-800 py-4">
          Job Application Form
        </h4>
        <form
          className="flex flex-col gap-4 w-full p-2"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <input
            type="text"
            defaultValue="Ajit Sharma"
            {...register("fullName", { required: true })}
            placeholder="Enter your full name"
            className="p-2 text-lg text-neutral-900 bg-gray-100"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter your email id"
            className="p-2 text-lg text-neutral-900 bg-gray-100"
          />
          <input
            type="text"
            {...register("qualification", { required: true })}
            placeholder="Qualifiation"
            className="p-2 text-lg text-neutral-900 bg-gray-100"
          />
          <input
            type="text"
            {...register("designation", { required: true })}
            placeholder="Current Designation"
            className="p-2 text-lg text-neutral-900 bg-gray-100"
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
