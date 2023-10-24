import Button from "./button";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ sidebarShown, toggleSidebar, activeStyle }) => {
  return (
    <div
      className={`xs:${
        sidebarShown ? "block" : "hidden"
      } fixed top-0 left-0 h-screen bg-[rgba(0,0,0,0.96)] w-full sm:hidden p-3 text-white flex flex-col`}
    >
      <div className="flex items-center  justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-[30px]" />
          <span>STELLARSAT</span>
        </div>

        <AiOutlineClose onClick={toggleSidebar} className="text-xl" />
      </div>

      <div className="flex flex-col gap-8 text-white items-center justify-between  h-2/3 my-auto">
        <NavLink
          to={`/`}
          onClick={toggleSidebar}
          className={({ isActive, isPending }) => (isActive ? activeStyle : "")}
        >
          <span>Home</span>
        </NavLink>

        <NavLink
          to={`about`}
          onClick={toggleSidebar}
          className={({ isActive, isPending }) => (isActive ? activeStyle : "")}
        >
          <span>About Us</span>
        </NavLink>

        <NavLink
          to={`blog`}
          onClick={toggleSidebar}
          className={({ isActive, isPending }) => (isActive ? activeStyle : "")}
        >
          <span>Blog</span>
        </NavLink>

        <NavLink
          to={`contact`}
          onClick={toggleSidebar}
          className={({ isActive, isPending }) => (isActive ? activeStyle : "")}
        >
          <span>Contact Us</span>
        </NavLink>

        <Button text="GET STARTED" />
      </div>
    </div>
  );
};

export default Sidebar;
