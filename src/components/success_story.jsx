import React from "react";

const SuccessStory = ({ text, index, heading, ruler }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-[35px] h-[35px] bg-primary-300 grid place-items-center text-green">
          {index}
        </div>

        {ruler && <div className="h-[80px] w-[3px] bg-primary-300 mt-2" />}
      </div>

      <div className="flex flex-col space-y-2">
        <h5 className="header-font">{heading}</h5>

        <p className="text-white text-sm">{text}</p>
      </div>
    </div>
  );
};

export default SuccessStory;
