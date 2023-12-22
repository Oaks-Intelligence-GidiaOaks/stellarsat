import { useEffect } from "react";
import {
  AboutUs,
  Banner,
  Blog,
  ContactUs,
  FAQ,
  JoinUs,
  Partners,
  Specialization,
  SuccessStories,
  Testimonials,
} from "../containers";
import ReactGA from "react-ga4";

console.log(import.meta.env.VITE_SMTP_PORT);

export const HomePage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "About Page",
    });
  }, []);

  return (
    <div className="conatiner mx-auto">
      {/* banner */}
      <Banner />

      {/* about us */}
      <AboutUs />

      {/* partners */}
      <Partners />

      {/* specialisation */}
      <Specialization />

      {/* success stories */}
      <SuccessStories />

      {/* FAQs */}
      {/* <FAQ /> */}

      {/* Testimonials */}
      <Testimonials />

      {/* blog */}
      <Blog />

      {/* join us */}
      <JoinUs />

      {/* contact us  */}
      <ContactUs />
    </div>
  );
};
