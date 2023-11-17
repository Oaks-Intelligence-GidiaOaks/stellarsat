import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import Button from "./button";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  Link as Linkk,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Footer = () => {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className=" bg-dark">
      <div className="container space-y-16 py-16 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            <span>STELLARSAT</span>
          </div>

          <div className="flex flex-col mt-8 md:mt-0  md:flex-row md:items-center gap-2">
            <span>Ready to get started? </span>
            <Button text="GET STARTED" />
          </div>
        </div>

        <div className=" w-full h-[1px] bg-primary-100" />

        <div className="flex flex-col md:flex-row gap-10  items-start">
          {/* newsletter */}
          <div className="pr-10">
            <h5 className="pb-4">
              Subscribe to our <br /> newsletter
            </h5>

            <form onSubmit={() => {}}>
              <div className="flex rounded">
                <input
                  type="text"
                  placeholder="Email address"
                  className="rounded-l-md bg-primary-400 px-3 text-sm"
                />
                <button className="bg-primary-300 p-3 rounded-r-md">
                  <AiOutlineRight color="black" />
                </button>
              </div>
            </form>
          </div>

          {/* company */}
          <div className="flex-1  space-y-2">
            <h5 className="text-primary-300">Company</h5>

            <ul className="space-y-2">
              <Link className="cursor-pointer" to="/about">
                <li>About Us</li>
              </Link>
              <Link
                to="specialty"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                <li>Focus Area</li>
              </Link>

              <Link to="sucess-stories" className="cursor-pointer">
                <li>Achievements</li>
              </Link>

              <Link className="cursor-pointer" to="/blog">
                <li>Blog</li>
              </Link>
              {/* <li>Career</li> */}
            </ul>
          </div>

          {/* links */}
          <div className="flex-1 space-y-2">
            <h5 className="text-primary-300">Quick links</h5>
            <ul className="space-y-2">
              <Link to="/about">
                <li>About Us</li>
              </Link>

              <Linkk to="specialty" className="cursor-pointer">
                <li>Focus Area</li>
              </Linkk>
            </ul>

            <h5 className="text-primary-300">Partners</h5>
            <ul className="space-y-2">
              <Link to="/about">
                <li>About Us</li>
              </Link>

              <Linkk
                smooth={true}
                duration={500}
                to="specialty"
                className="cursor-pointer"
              >
                <li>Focus Area</li>
              </Linkk>
            </ul>
          </div>

          {/* help */}
          <div className="flex-1  space-y-2 ">
            <h5 className="text-primary-300">Help</h5>

            <ul className="space-y-2">
              <li>FAQs</li>

              <Link to="/contact">
                <li>Contact Us Area</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-y-6">
          <div className="flex gap-6">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
          </div>

          {/* social links */}
          <div className="flex gap-5">
            <BiLogoFacebook />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
