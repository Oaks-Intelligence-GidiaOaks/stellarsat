import React from "react";
import bigCardPost from "../assets/bigCardPost.svg";

const BlogPostBanner = ({ img, title, category, date }) => {
  const style = {
    background: `url(${bigCardPost}) no-repeat cover`,
    backgroundColor: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2))",
    backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={style} className="w-full relative h-[85vh]">
      <div className="absolute bottom-10 left-20 w-2/3">
        <p className="text-[#6DF8FF] text-sm header-font">
          KNOWLEDGE Sep 26, 2021 · 9 min read
        </p>
        <h3 className="text-7xl header-font">
          Designers are meant to be loved, not to be understood.
        </h3>
      </div>
    </div>
  );
};

export default BlogPostBanner;
