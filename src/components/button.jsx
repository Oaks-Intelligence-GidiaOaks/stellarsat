import React from "react";

const Button = ({ text }) => {
  return (
    <div className="p-3 cursor-pointer font-roboto px-10 w-fit rounded-md text-center text-white font-normal bg-stellarBlue">
      <button className="w-full ">{text}</button>
    </div>
  );
};

export default Button;
