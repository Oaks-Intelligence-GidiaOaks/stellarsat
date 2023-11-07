import React from "react";
import { FiSearch } from "react-icons/fi";

const CustomInput = ({ type, Icon, placeholderText, onChange }) => {
  const types = ["text", "date"];

  const debounceChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="p-2 rounded flex justify-between items-center bg-[#00575763]">
      {types.includes(type) ? (
        <input
          type={type}
          onChange={debounceChange}
          placeholder={placeholderText}
          className="placeholder-[#007C7C] text-gray-200 text-sm outline-none border-none bg-transparent pr-3 appearance-none"
        />
      ) : (
        <span className="text-xs text-[#007C7C] pr-2 text">
          {placeholderText}
        </span>
      )}

      {/* <Icon className="text-xs" /> */}
      <Icon className="text-primary-300" />
    </div>
  );
};

export default CustomInput;
