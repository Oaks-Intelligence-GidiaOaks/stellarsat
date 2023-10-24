import React from "react";
import { SuccessStory } from "../components";
import Neww from "../assets/new.svg";
import { SlideReveal } from "../components/animation";

const SuccessStories = () => {
  return (
    <section id="sucess-stories" className="py-24">
      <div className="container  mx-auto flex flex-col gap-16 lg:flex-row lg:justify-between">
        <div className="flex-[0.35]">
          <h5 className="text-primary-300 uppercase header-font">
            Success Stories
          </h5>
          <h4 className=" text-2xl md:text-3xl font-[500] mt-2 header-font">
            Here are some of our achievements
          </h4>
          <div className="space-y-2 mt-8">
            <SlideReveal flow="y">
              <SuccessStory
                ruler
                heading="Breaking Boundaries"
                text=" Our research is conducted within the main remits of space, communications and quantum computing which we use in Reshaping Industries."
                index="1"
              />
            </SlideReveal>

            <SlideReveal flow="y" delay={0.6}>
              <SuccessStory
                ruler
                heading="Revolutionizing Healthcare"
                text="Our pilot research has investigated and aided in Enhancing Collaborative Diagnosis through Satellite Communications."
                index="2"
              />
            </SlideReveal>

            <SlideReveal flow="y" delay={1.4}>
              <SuccessStory
                heading="Pioneering the Future"
                text=" We have also investigated the Harnessing of Quantum Computing for Artificial Gas Lift Scenarios in Marginal Fields."
                index="3"
              />
            </SlideReveal>
          </div>
        </div>

        <div className="flex-[0.65] ">
          <img src={Neww} alt="image" className="ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
