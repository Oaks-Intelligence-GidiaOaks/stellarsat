import React from "react";
import { Banner, ContactUs, JoinUs, MainBlog } from "../containers";
import AboutBanner from "../containers/about_banner";

const BlogPage = () => {
  return (
    <div className="  ">
      {/* blog banner */}
      <AboutBanner headerText="Get the latest Updates from our blog " />

      {/* blog headlines */}
      <MainBlog />

      {/* blog posts */}

      {/* headlines repeated */}

      {/* post repeated */}

      {/* join us */}
      <JoinUs />

      {/* contact us */}
      <ContactUs />
    </div>
  );
};

export default BlogPage;
