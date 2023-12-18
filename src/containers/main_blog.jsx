import { useEffect, useState } from "react";
import { BigCardPost, CustomInput, DateInput, PostCard } from "../components";
import postBg from "../assets/postBg.svg";
import { FiSearch } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { getBlogPosts } from "../../utils/sanity-utils";

const MainBlog = () => {
  const [blogPosts, setBlogPosts] = useState(null);
  const [skip, setSkip] = useState(0);
  let pageSize = 9;

  let totalCount = blogPosts?.totalCount;

  useEffect(() => {
    const getPostsQuery = async () => {
      const data = await getBlogPosts(skip, pageSize);
      setBlogPosts(data);
    };

    getPostsQuery();
  }, [skip, pageSize]);

  let prevCondition = skip >= pageSize;
  let nextCondition = skip < totalCount && pageSize + skip <= totalCount;

  const searchPost = async (str) => {
    try {
      const data = await getBlogPosts(skip, pageSize, str);
      setBlogPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePagination = (direction) => {
    if (direction === "prev" && prevCondition) {
      setSkip(skip - pageSize);
    } else if (direction === "next" && nextCondition) {
      setSkip(skip + pageSize);
    } else {
      return null;
    }
  };

  return (
    <section id="main-blog" className="py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3">
          <p className="text-sm">
            Showing {`${skip}`}-{blogPosts?.results.length} of {totalCount}{" "}
            results
          </p>
          <div className="flex gap-3 flex-wrap items-center">
            <CustomInput
              Icon={FiSearch}
              placeholderText="Search topic"
              type="text"
              onChange={searchPost}
              setBlogPosts={setBlogPosts}
            />
            {/* <DateInput Icon={MdDateRange} /> */}

            <div className="flex-1" />
            <CustomInput
              Icon={BiChevronDown}
              type="dropdown"
              placeholderText="Categories"
            />

            <CustomInput
              Icon={BiChevronDown}
              type="dropdown"
              placeholderText="Author"
            />

            <CustomInput
              Icon={BiChevronDown}
              type="dropdown"
              placeholderText="Tags"
            />
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
            {blogPosts?.results?.map((post, index) => {
              return <BigCardPost key={post._id} data={post} img={postBg} />;
            })}
          </div>

          <div className="mt-6 flex items-center gap-8 justify-center ">
            <button
              disabled={!prevCondition}
              className={`p-2 px-6 border ${
                !prevCondition &&
                "cursor-not-allowed border-gray-600 text-gray-600"
              } rounded`}
              onClick={() => handlePagination("prev")}
            >
              Prev
            </button>

            <button
              className={`p-2 
             ${
               !nextCondition &&
               "cursor-not-allowed border-gray-600 text-gray-600"
             }
              px-6 border  rounded`}
              onClick={() => handlePagination("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlog;
