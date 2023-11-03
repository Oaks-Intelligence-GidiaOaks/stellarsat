import { useState } from "react";

const FormInput = ({ label, placeholder, type, formProps }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="space-y-3 flex flex-1 w-full flex-col">
      <label className="capitalise ">{label}</label>

      <input
        value={value}
        {...formProps}
        onChange={handleChange}
        type={type}
        className="p-3 rounded text-white bg-blue outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
