import React, { useEffect } from "react";
import { AboutBanner, ContactUs, JoinUs } from "../containers";
import ReactGA from "react-ga4";

const ContactPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "About Page",
    });
  }, []);

  return (
    <div>
      {/* banner */}
      <AboutBanner
        headerText="Contact Us"
        lead="Fill in this form or send us an e-mail with your inquiry."
      />

      {/* contact us */}
      <ContactUs />

      {/* join us */}
      <JoinUs />
    </div>
  );
};

export default ContactPage;
