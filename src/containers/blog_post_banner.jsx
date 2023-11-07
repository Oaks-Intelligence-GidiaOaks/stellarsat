import React from "react";
import bigCardPost from "../assets/bigCardPost.svg";
import { formatDate } from "../../utils/dateFormatter";

const BlogPostBanner = ({ data }) => {
  console.log("new", data);

  const style = {
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${bigCardPost})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={style} className="w-full relative h-[85vh] flex flex-col">
      <div className="container mt-auto mb-10 lg:w-2/3">
        <p className="text-[#6DF8FF] text-sm header-font capitalize">
          <span className="uppercase">{data?.tag}</span>
          {"   "}
          {formatDate(data?._createdAt)}
        </p>
        <h3 className="text-4xl lg:text-6xl header-font">{data?.title}</h3>
      </div>
    </div>
  );
};

export default BlogPostBanner;
