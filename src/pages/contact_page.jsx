import React from "react";
import { AboutBanner, ContactUs, JoinUs } from "../containers";

const ContactPage = () => {
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
