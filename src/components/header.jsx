import React, { useEffect, useState } from "react";
import Button from "./button";
import Logo from "../assets/logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "./sidebar";

const Header = () => {
  const [sidebarShown, setSidebarShown] = useState(false);
  const [shadowBg, setShadowBg] = useState("shadow-none");
  const activeStyle = "text-primary-300 font-[500]";

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShadowBg("shaodw-md shadow-red-500");
      } else {
        setShadowBg("shaodw-none");
      }
    });

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setShadowBg("shaodw-md");
        } else {
          setShadowBg("shadow-none");
        }
      });
    };
  }, [location]);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarShown(!sidebarShown);
    console.log("clicked", sidebarShown);
  };

  return (
    <div
      className={`${shadowBg} bg-primary-500 transition-all duration-300 ease-in-out  mx-auto sticky top-0 z-40`}
    >
      <div
        className={`container  flex items-center justify-between  py-4 text-sm`}
      >
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="w-[40px] " />
          <span>STELLARSAT</span>
        </div>

        <div className="md:flex  items-center gap-6 text-stellarGray-500 hidden ">
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive ? activeStyle : ""
            }
          >
            <span>Home</span>
          </NavLink>

          <NavLink
            to={`about#about-banner`}
            className={({ isActive, isPending }) =>
              isActive ? activeStyle : ""
            }
          >
            <span>About Us</span>
          </NavLink>

          <NavLink
            to={`blog`}
            className={({ isActive, isPending }) =>
              isActive ? activeStyle : ""
            }
          >
            <span>Blog</span>
          </NavLink>

          <NavLink
            to={`contact`}
            className={({ isActive, isPending }) =>
              isActive ? activeStyle : ""
            }
          >
            <span>Contact Us</span>
          </NavLink>
        </div>

        <div
          onClick={() => navigate("/contact")}
          className="hidden md:block cursor-pointer"
        >
          <Button text="GET STARTED" />
        </div>

        <div className="xs:flex items-center sm:hidden">
          <RxHamburgerMenu onClick={toggleSidebar} className="text-3xl" />
        </div>

        {sidebarShown && (
          <Sidebar
            sidebarShown={sidebarShown}
            activeStyle={activeStyle}
            toggleSidebar={toggleSidebar}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
