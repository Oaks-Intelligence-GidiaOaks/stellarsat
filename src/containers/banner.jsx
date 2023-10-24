import React from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bannerImg.svg";
import { motion } from "framer-motion";
import { SlideReveal } from "../components/animation";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container py-10 flex flex-wrap gap-y-16 items-center ">
        <div className="md:flex-[0.7] xs:flex-1  text-center md:text-left">
          <SlideReveal flow="y">
            <h3 className=" text-3xl xl:text-[68px] header-font md:text-[58px]   font-[500]">
              Radical Global Transformation Through Innovation
            </h3>
          </SlideReveal>

          <SlideReveal flow="x" width="100%">
            <div className="w-fit mt-6 mx-auto md:mx-0">
              <Link to={"contact"}>
                <Button text="GET STARTED" />
              </Link>
            </div>
          </SlideReveal>
        </div>

        <div className="flex-1 md:flex-[0.5]  px-6 xs:hidden md:block">
          <SlideReveal flow="y" width="100%">
            <img src={BannerImage} alt="banner img" />
          </SlideReveal>
        </div>
      </div>
    </section>
  );
};

export default Banner;
