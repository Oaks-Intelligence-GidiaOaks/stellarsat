import React from "react";
import innovateUkLogo from "../assets/innovateUkLogo.svg";
import oaksLogo from "../assets/oaksLogo.svg";
import sbriLogo from "../assets/sbriLogo.svg";
import mDirectLogo from "../assets/mDirectLogo.svg";
import deptEnergyLogo from "../assets/deptEnergyLogo.svg";
import { FadeReveal, SlideReveal } from "../components/animation";

const partners = () => {
  return (
    <section id="partners" className="bg-primary-200">
      <div className="py-24 container space-y-24">
        <div className="w-fit mx-auto text-center space-y-4 ">
          <SlideReveal width="100%" flow="x">
            <h3 className="font-[500] header-font sticky top-0 text-2xl md:text-3xl capitalize">
              Companies We’ve Worked With
            </h3>
          </SlideReveal>

          <SlideReveal negative flow="x" width="100%">
            <p className="text-stellarGray-400 md:w-4/6  text-sm text-center mx-auto">
              We’ve had the opportunity to work with some pretty amazing
              companies so far, We have also worked and continue to work with
              excellent organization across the globe in providing
              technology-based solutions to global challenges. Will yours be
              next?
            </p>
          </SlideReveal>
        </div>

        <div className="flex flex-wrap mx-auto  justify-center  w-fit gap-10">
          <FadeReveal>
            <img className="w-32" src={innovateUkLogo} alt="innovate logo " />
          </FadeReveal>

          <FadeReveal delay={0.8}>
            <img src={oaksLogo} className="w-32" alt="oaks intelligence logo" />
          </FadeReveal>
          <FadeReveal delay={1.8}>
            <img className="w-32" src={sbriLogo} alt="sbri logo" />
          </FadeReveal>
          <FadeReveal delay={2.2}>
            <img
              className="w-32"
              src={deptEnergyLogo}
              alt="department of energy and security logo"
            />
          </FadeReveal>
          <FadeReveal delay={3.2}>
            <img className="w-32" src={mDirectLogo} alt="mDirect logo" />
          </FadeReveal>
        </div>
      </div>
    </section>
  );
};

export default partners;
