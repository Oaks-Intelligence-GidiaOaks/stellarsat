import React, { useEffect, useState } from "react";
import { ContactUs, JoinUs, BlogPostBanner } from "../containers";
import { BlogPost, PostCard } from "../components";
import { useParams } from "react-router-dom";
import { getBlogPost, getBlogPosts } from "../../utils/sanity-utils";
import ReactGA from "react-ga4";

const SingleBlogPage = () => {
  const [blogPost, setBlogPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "About Page",
    });
  }, []);

  useEffect(() => {
    const getPostQuery = async () => {
      const data = await getBlogPost(id);
      const ddata = await getBlogPosts(0, 4);

      setBlogPost(data);
      setBlogPosts(ddata.results);
    };

    getPostQuery();
  }, [id]);
  console.log(blogPost);
  return (
    <div>
      {/* banner  */}
      <BlogPostBanner data={blogPost} />

      {/* main content container */}
      <BlogPost data={blogPost} />

      {/* other blog posts  */}
      <div className="py-24 container mx-auto flex flex-col md:flex-row items-center justify-center gap-3">
        {blogPosts.length > 0 &&
          blogPosts
            ?.slice(0, 4)
            .map((post) => <PostCard key={post._id} data={post} />)}
      </div>

      {/* join us */}
      <JoinUs />

      {/* contact us */}
      <ContactUs />
    </div>
  );
};

export default SingleBlogPage;
