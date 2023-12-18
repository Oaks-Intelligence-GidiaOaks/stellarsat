import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const PostCard = ({ mainBlog, data }) => {
  const date = new Date(data?._createdAt);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <Link to={`/blog/${data?.slug}`}>
      <div className=" min-w-[280px] h-80 flex flex-col flex-grow m-2 my-1">
        <div className="relative">
          <img
            src={data?.image}
            alt=""
            className="w-full h-40 border-t border-l border-r border-primary-200 object-cover"
          />

          {!mainBlog && (
            <div className="bg-primary-300 text-sm p-2 text-primary-500  text-center absolute bottom-0 right-0">
              {formattedDate}
            </div>
          )}
        </div>

        <div
          className={`${
            !mainBlog && "bg-[#003440] px-5"
          } py-4 flex flex-col text-sm flex-1 `}
        >
          {mainBlog ? (
            <div>
              <span>{formattedDate} · 9 min read</span>
            </div>
          ) : (
            <div>
              <span className="Capitalize text-xs ">
                Posted By <span className="">{data?.author}</span>
              </span>
            </div>
          )}

          <h4 className="text-xl font-[500] capitalize ">{data?.title}</h4>

          <div className="text-sm">{}</div>

          <div
            className={`${
              mainBlog
                ? "p-2 rounded bg-stellarBlue text-center w-fit  text-white px-6"
                : "text-primary-300 mt-auto "
            }`}
          >
            <Link to={`/blog/${data?.slug}`}>
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
