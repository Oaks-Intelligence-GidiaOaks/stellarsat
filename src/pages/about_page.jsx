import React, { useEffect } from "react";
import { AboutUs, ContactUs, JoinUs, Specialization } from "../containers";
import AboutBanner from "../containers/about_banner";
import aboutBannerBg from "../assets/aboutBanner.svg";
import ReactGA from "react-ga4";

const AboutPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "About Page",
    });
  }, []);

  return (
    <div>
      {/* about banner */}
      <AboutBanner
        headerText="What You Need To Know About Stellarsat"
        lead=" Stellarsat wields the mastery and expertise to grow any business
            through digital solutions, that help them break into the market and
            stand out."
        image={aboutBannerBg}
      />

      {/* About us */}
      <AboutUs whoWeAre />

      {/* specialization */}
      <Specialization />

      {/* Join-us */}
      <JoinUs />

      {/* contact us */}
      <ContactUs />
    </div>
  );
};

export default AboutPage;
