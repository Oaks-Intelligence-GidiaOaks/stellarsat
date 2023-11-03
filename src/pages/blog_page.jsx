import { ContactUs, JoinUs, MainBlog } from "../containers";
import AboutBanner from "../containers/about_banner";
import blogBanner from "../assets/blogBanner.svg";

const BlogPage = () => {
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
