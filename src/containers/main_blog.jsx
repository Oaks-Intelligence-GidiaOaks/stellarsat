import { useEffect, useState } from "react";
import { BigCardPost, CustomInput, DateInput, PostCard } from "../components";
import postBg from "../assets/postBg.svg";
import bigCardPost from "../assets/bigCardPost.svg";
import { FiSearch } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { FadeReveal, SlideReveal } from "../components/animation";
import { getBlogPosts } from "../../utils/sanity-utils";

const MainBlog = () => {
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    const getPostsQuery = async () => {
      const data = await getBlogPosts();
      console.log(data);
      setBlogPosts(data);
    };

    getPostsQuery();
  }, []);

  const searchPost = async (str) => {
    try {
      const data = await getBlogPosts(str);
      console.log(data);
      setBlogPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const firstPost = blogPosts?.[0];

  return (
    <section id="main-blog" className="py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3">
          <p className="text-sm">Showing 1-25 of 56 results</p>
          <div className="flex gap-3 flex-wrap items-center">
            <CustomInput
              Icon={FiSearch}
              placeholderText="Search topic"
              type="text"
              onChange={searchPost}
              setBlogPosts={setBlogPosts}
            />
            <DateInput Icon={MdDateRange} />

            <div className="flex-1" />
            <CustomInput
              Icon={BiChevronDown}
              type="dropdown"
              placeholderText="Categories"
            />
            {/* <CustomInput
              Icon={BiChevronDown}
              type="dropdown"
              placeholderText="Author"
            /> */}
            <CustomInput
              Icon={BiChevronDown}
              type="dropdown"
              placeholderText="Tags"
            />
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
            {/* <div className="md:col-start-1 md:col-end-3 md:row-span-2 ">
            <BigCardPost data={firstPost} img={bigCardPost} />
            </div> */}

            {blogPosts?.map((post, index) => {
              return <BigCardPost key={post._id} data={post} img={postBg} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlog;
