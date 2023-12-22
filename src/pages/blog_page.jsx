import { ContactUs, JoinUs, MainBlog } from "../containers";
import AboutBanner from "../containers/about_banner";
import blogBanner from "../assets/blogBanner.svg";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const BlogPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "About Page",
    });
  }, []);

  return (
    <div className="  ">
      {/* blog banner */}
      <AboutBanner
        image={blogBanner}
        headerText="Get the latest Updates from our blog "
      />

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
