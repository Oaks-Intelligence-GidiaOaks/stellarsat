import React from "react";
import { AboutUs, ContactUs, JoinUs, Specialization } from "../containers";
import AboutBanner from "../containers/about_banner";

const AboutPage = () => {
  return (
    <div>
      {/* about banner */}
      <AboutBanner
        headerText="What You Need To Know About Stellarsat"
        lead=" Stellarsat wields the mastery and expertise to grow any business
            through digital solutions, that help them break into the market and
            stand out."
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
