import React from "react";

const FormInput = ({ label, placeholder, type }) => {
  return (
    <div className="space-y-3 flex flex-1 w-full flex-col">
      <label className="capitalise ">
        {label}
      </label>

      <input
        type={type}
        className="p-3 rounded bg-blue text-green2 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
