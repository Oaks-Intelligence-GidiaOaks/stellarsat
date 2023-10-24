import React from "react";
import bigCardPost from "../assets/bigCardPost.svg";
import { Link } from "react-router-dom";

const BigCardPost = ({ img }) => {
  return (
    <Link to={"/blog/1"}>
      <div className="relative m-2 my-1 min-w-[274px]">
        <img id="tint" className="w-full" src={img} alt="" />

        <div className="absolute text-sm bottom-4 left-4">
          <h4>Knowledge</h4>

          <h6>Sep 26, 2021 · 9 min read</h6>

          <h3>Designers are meant to be loved, not to be understood.</h3>
        </div>
      </div>
    </Link>
  );
};

export default BigCardPost;
