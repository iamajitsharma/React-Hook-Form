import React from "react";

const Input = ({
  fieldName,
  type,
  register,
  errors,
  placeholder,
  isRequired,
  maximLength,
  minimLength,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(fieldName, {
        required: {
          value: isRequired,
          message: "This is required field",
        },
        maxLength: {
          value: maximLength,
          message: `Value must be maximum ${maximLength}`,
        },
        minLength: {
          value: minimLength,
          message: `Value must be minimum ${minimLength}`,
        },
      })}
      className="p-2 border-[2px] border-gray-600/70 hover:bg-neutral-200/70 shadow-sm"
    />
  );
};

export default Input;
