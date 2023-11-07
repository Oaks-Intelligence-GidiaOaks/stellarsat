// import { useState } from "react";

const FormInput = ({ label, placeholder, type, formProps, error }) => {
  // const [value, setValue] = useState("");

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <div className="space-y-3 flex flex-1 w-full flex-col">
      <label className="capitalise ">{label}</label>

      <input
        // value={value}
        {...formProps.register}
        // onChange={handleChange}
        type={type}
        className="p-3 rounded text-white bg-blue outline-none"
        placeholder={placeholder}
      />

      <span className="italic text-xs text-red-500">{error?.message}</span>
    </div>
  );
};

export default FormInput;
