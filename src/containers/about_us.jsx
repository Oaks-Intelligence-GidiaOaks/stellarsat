import React from "react";
import { GrStatusGood } from "react-icons/gr";
import globeImage from "../assets/globeImage.svg";
import StellarImg from "../assets/StellarImg.svg";
import innovativeUkLogo from "../assets/innovateUkLogo.svg";
import oaksLogo from "../assets/oaksLogo.svg";
import sbriLogo from "../assets/sbriLogo.svg";
import mDirectLogo from "../assets/mDirectLogo.svg";
import Check from "../assets/Check.svg";
import { FadeReveal, SlideReveal } from "../components/animation";
// import innovativeUkLogo from '../assets/innovativeUkLogo.svg'

const AboutUs = ({ whoWeAre }) => {
  return (
    <section id="about-us" className="py-24">
      <div
        className={`container flex flex-col ${
          whoWeAre ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between`}
      >
        <div className="xs:flex-1 md:flex-[0.5] flex-wrap">
          {whoWeAre ? (
            <SlideReveal flow="x" delay={1.2}>
              <img src={StellarImg} alt="globe" />
            </SlideReveal>
          ) : (
            <SlideReveal flow="x" negative delay={1.3}>
              <img src={globeImage} alt="globe" />
            </SlideReveal>
          )}
        </div>

        <div className="space-y-10 px-8 xs:flex-1 md:flex-[0.47]">
          <div className="space-y-4">
            <SlideReveal flow="y">
              <h5 className="uppercase header-font text-primary-300">
                {whoWeAre ? "who we are" : "Learn About Us"}
              </h5>
            </SlideReveal>

            <SlideReveal flow="y">
              <h3 className="capitalize header-font text-2xl md:text-3xl font-[500]">
                {whoWeAre
                  ? "Stellarsat Limited"
                  : "What you need to know about Stellarsat"}
              </h3>
            </SlideReveal>

            <SlideReveal flow="y">
              <p className="text-sm text-justify font-light">
                Stellarsat Limited is at the forefront of developing and
                leveraging emerging technologies within the remits of space,
                communications and quantum technologies. We are committed to the
                safe and responsible deployment of these technology areas in
                achieving the sustainable development goals (SDGs)
              </p>
            </SlideReveal>
          </div>

          <div className="space-y-4">
            <FadeReveal>
              <h6 className="text-primary-300">Our Values</h6>
            </FadeReveal>

            <SlideReveal flow="x">
              <p className="text-sm">
                As a company, we feel a deep sense of purpose and pride in
                knowing that through our work we have the power to change Africa
                and the world.
              </p>
            </SlideReveal>

            <FadeReveal>
              <div className="flex items-center gap-2 text-sm">
                <img src={Check} alt="" />
                <span>Pixel perfect & expertly crafted to meet standards</span>
              </div>
            </FadeReveal>

            <FadeReveal>
              <div className="flex items-center gap-2 text-sm">
                <img src={Check} alt="" />

                <span>We love what we do & who we do it for</span>
              </div>
            </FadeReveal>
          </div>

          {/* sponsor images */}
          {whoWeAre && (
            <marquee behavior="" direction="">
              <div className="flex gap-5 items-center">
                <img className="w-32" src={innovativeUkLogo} alt="" />
                <img className="w-32" src={oaksLogo} alt="" />
                <img className="w-32" src={sbriLogo} alt="" />
                <img className="w-32" src={mDirectLogo} alt="" />
              </div>
            </marquee>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
