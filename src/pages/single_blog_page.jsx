import React from "react";
import { ContactUs, JoinUs, BlogPostBanner } from "../containers";
import { BlogPost, PostCard } from "../components";
import blog1 from "../assets/blog1.svg";

const SingleBlogPage = () => {
  return (
    <div>
      {/* banner  */}
      <BlogPostBanner />

      {/* main content container */}
      <BlogPost />

      {/* other blog posts  */}
      <div className="py-24 container mx-auto flex flex-col md:flex-row items-center justify-center gap-3">
        <PostCard
          title="Stellarsat Limited"
          image={blog1}
          comments=""
          user=""
          desc="Stellarsat Limited is at the forefront of developing and leveraging emerging technologies within the remits of space, communications and quantum technologies. We are committed to the safe and responsible deployment of these technology areas in achieving the sustainable development goals (SDGs)"
          mainBlog
        />
        <PostCard
          title="Stellarsat Limited"
          image={blog1}
          comments=""
          user=""
          desc="Stellarsat Limited is at the forefront of developing and leveraging emerging technologies within the remits of space, communications and quantum technologies. We are committed to the safe and responsible deployment of these technology areas in achieving the sustainable development goals (SDGs)"
          mainBlog
        />
        <PostCard
          title="Stellarsat Limited"
          image={blog1}
          comments=""
          user=""
          desc="Stellarsat Limited is at the forefront of developing and leveraging emerging technologies within the remits of space, communications and quantum technologies. We are committed to the safe and responsible deployment of these technology areas in achieving the sustainable development goals (SDGs)"
          mainBlog
        />
      </div>

      {/* join us */}
      <JoinUs />

      {/* contact us */}
      <ContactUs />
    </div>
  );
};

export default SingleBlogPage;
