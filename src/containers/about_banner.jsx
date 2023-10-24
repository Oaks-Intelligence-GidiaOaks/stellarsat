import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { FadeReveal, SlideReveal } from "../components/animation";

const AboutBanner = ({ headerText, lead }) => {
  return (
    <section id="about-banner" className="h-[90vh] grid place-items-center">
      <div className="container py-10 flex flex-wrap items-center ">
        <div className="md:flex-[0.7] xs:flex-1  text-center mx-auto">
          <FadeReveal width="100%">
            <h3 className="text-3xl xl:text-[68px] md:text-[58px] font-[500] mb-8 header-font">
              {headerText}
            </h3>
          </FadeReveal>

          <FadeReveal width="100%">
            <p>{lead}</p>
          </FadeReveal>

          <div className="w-fit mt-8 mx-auto">
            <SlideReveal flow="y">
              <Link to={"#"}>
                <Button text="GET STARTED" />
              </Link>
            </SlideReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
