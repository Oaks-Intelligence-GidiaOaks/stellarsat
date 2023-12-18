import React from "react";
import avatar from "../assets/Avatar.svg";
import facebook from "../assets/facebook.svg";
import behance from "../assets/behance.svg";
import medium from "../assets/medium.svg";
import postImg from "../assets/postImg.svg";
import { PortableText } from "@portabletext/react";

const myPortableTextComponents = {
  types: {
    image: ({ value }) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },

  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 poppins-4 list-disc space-y-5 text-main-light dark:text-main">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg poppins-4 list-decimal text-main-light dark:text-main">
        {children}
      </ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl py-6 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl py-6 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl py-6 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-6 font-bold poppins-7 text-main-light dark:gradient-text">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4 transition-all duration-300 ease-in-out">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-1-[#F7AB0A] border-1-4 pl-5 py-5 my-5 poppins-4 text-main-light dark:text-main poppins-4 leading-[34px] mt-4 transition-all duration-300 ease-in-out">
        {children}
      </blockquote>
    ),
  },
};

const BlogPost = ({ data }) => {
  return (
    <section id="blog-post" className="py-16">
      <div className="container mx-auto">
        {/* post image */}
        <img src={postImg} className="md:h-60vh w-full" alt="" />

        {/* rich text */}
        <div id="rich-text-container" className="py-16 text-sm text-justify">
          <PortableText
            value={data?.content}
            components={myPortableTextComponents}
          />
        </div>

        {/* user details */}
        <div className="flex gap-2 text-sm p-4 text-gray-500 items-start bg-white rounded">
          <img
            src={data?.authorImg}
            className="h-14 w-14 rounded-full bg-slate-500"
            alt=""
          />

          <div className="space-y-3">
            <h6>{data?.author}</h6>

            <div className="flex gap-2 items-center">
              <span className="capitalize">{data?.position}.</span>
              <span className="font-[600]">Oaks Intelligence</span>
            </div>

            <div className="flex gap-1 text-gray-700 items-center">
              <span> Digital content wrangler |</span>
              <span>UX enthusiast |</span>
              <span> Recovering educator</span>
              <span>| Football fan</span>
            </div>
          </div>

          {/* <div className="space-y-3 ml-auto">
            <img src={facebook} alt="" />
            <img src={behance} alt="" />
            <img src={medium} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
