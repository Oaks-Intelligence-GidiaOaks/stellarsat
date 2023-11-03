import React, { useEffect, useState } from "react";
import { PostCard } from "../components";
import blog1 from "../assets/blog1.svg";
import blog2 from "../assets/blog2.svg";
import blog3 from "../assets/blog3.svg";
import blog4 from "../assets/blog4.svg";
import { SlideReveal } from "../components/animation";
import { getBlogPosts } from "../../sanity/sanity-utils";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then((res) => {
      console.log(res);
      setPosts(res);
    });
  }, []);

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto space-y-24">
        <div className="text-center w-fit mx-auto">
          <h5 className="text-primary-300 header-font">OUR BLOG</h5>

          <h3 className="text-3xl capitalize header-font">Our Latest Posts</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {posts?.map((post) => {
            return <PostCard data={post} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
