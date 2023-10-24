import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const PostCard = ({ comments, user, title, date, image, mainBlog, desc }) => {
  return (
    <Link to={"/blog/1"}>
      <div className=" min-w-[280px]  flex-grow m-2 my-1">
        <div className="relative">
          <img src={image} alt="" className="w-full" />

          {!mainBlog && (
            <div className="bg-primary-300 text-sm p-2 text-primary-500  text-center absolute bottom-0 right-0">
              {date}
            </div>
          )}
        </div>

        <div
          className={`${
            !mainBlog && "bg-[#003440] px-5"
          } py-4 space-y-4 text-sm `}
        >
          {mainBlog ? (
            <div>
              <span>Sep 26, 2021 · 9 min read</span>
            </div>
          ) : (
            <div>
              <span>{comments} comments </span> <span>by:{user}</span>
            </div>
          )}

          <h4 className="text-xl font-[500]">{title}</h4>

          <div className="text-sm">{desc}</div>

          <div
            className={`${
              mainBlog
                ? "p-2 rounded bg-stellarBlue text-center w-fit  text-white px-6"
                : "text-primary-300"
            }`}
          >
            <Link to={`/blog/1`}>
              <button className="flex items-center gap-4 text-sm  font-[500]">
                <span>READ MORE</span>

                {!mainBlog && <AiOutlineArrowRight />}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
