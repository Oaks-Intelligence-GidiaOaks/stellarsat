import React from "react";
import { BigCardPost, CustomInput, PostCard } from "../components";
import postBg from "../assets/postBg.svg";
import bigCardPost from "../assets/bigCardPost.svg";
import blog1 from "../assets/blog1.svg";
import { FiSearch } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { FadeReveal, SlideReveal } from "../components/animation";

const MainBlog = () => {
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
            />
            <CustomInput
              Icon={MdDateRange}
              placeholderText="Date"
              type="date"
            />

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

          <div className="py-8 grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense">
            <div className="md:col-start-1 md:col-end-3 md:row-span-2 ">
              <FadeReveal>
                <BigCardPost img={bigCardPost} />
              </FadeReveal>
            </div>

            <SlideReveal flow="y">
              <BigCardPost img={postBg} />
            </SlideReveal>
            <SlideReveal flow="y">
              <BigCardPost img={postBg} />
            </SlideReveal>

            {/* <div className="mt-4 w-full col-span-3" /> */}

            <FadeReveal>
              <PostCard
                title="Designers are meant to be loved, and not to be understood."
                user="admin"
                comments="1"
                date="Sept 20, 2023"
                image={blog1}
                mainBlog
              />
            </FadeReveal>

            <FadeReveal>
              <PostCard
                title="Designers are meant to be loved, and not to be understood."
                user="admin"
                comments="1"
                date="Sept 20, 2023"
                image={blog1}
                mainBlog
              />
            </FadeReveal>

            <FadeReveal>
              <PostCard
                title="Designers are meant to be loved, and not to be understood."
                user="admin"
                comments="1"
                date="Sept 20, 2023"
                image={blog1}
                mainBlog
              />
            </FadeReveal>

            <FadeReveal>
              <BigCardPost img={postBg} />
            </FadeReveal>
            <div className="md:col-span-2 md:row-span-2 ">
              <FadeReveal>
                <BigCardPost img={bigCardPost} />
              </FadeReveal>
            </div>
            <BigCardPost img={postBg} />
            <PostCard
              title="Designers are meant to be loved, and not to be understood."
              user="admin"
              comments="1"
              date="Sept 20, 2023"
              image={blog1}
              mainBlog
            />
            <PostCard
              title="Designers are meant to be loved, and not to be understood."
              user="admin"
              comments="1"
              date="Sept 20, 2023"
              image={blog1}
              mainBlog
            />
            <PostCard
              title="Designers are meant to be loved, and not to be understood."
              user="admin"
              comments="1"
              date="Sept 20, 2023"
              image={blog1}
              mainBlog
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlog;
