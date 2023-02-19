import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";

import LogoHeader from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Tiktok from "../../public/assets/Icon/Tiktok.svg";
import Youtube from "../../public/assets/Icon/youtube.svg";
import Home from "../../public/assets/Icon/home.svg";
import About from "../../public/assets/Icon/about.svg";
import Games from "../../public/assets/Icon/game.svg";
import Testimonial from "../../public/assets/Icon/Testimonial.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col">
          <div className="col-start-0 col-end-0 flex items-center">
            <LogoHeader className="h-20 w-auto" />
          </div>
          <ul className="hidden lg:flex col-start-2 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "px-2 py-2 mx-2 cursor-pointer  inline-block relative" +
                (activeLink === "home"
                  ? " text-blue-500 animation-active "
                  : " text-black-500 hover:text-blue-500 a")
              }
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-135}
              duration={1000}
              onSetActive={() => {
                setActiveLink("About");
              }}
              className={
                "px-2 py-2 mx-2 cursor-pointer  inline-block relative" +
                (activeLink === "About"
                  ? " text-blue-500 animation-active "
                  : " text-black-500 hover:text-blue-500 ")
              }
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="latestgames"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
              onSetActive={() => {
                setActiveLink("latestgames");
              }}
              className={
                "px-2 py-2 mx-2 cursor-pointer  inline-block relative" +
                (activeLink === "latestgames"
                  ? " text-blue-500 animation-active "
                  : " text-black-500 hover:text-blue-500 ")
              }
            >
              Games
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-2 py-2 mx-2 cursor-pointer  inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-blue-500 animation-active "
                  : " text-black-500 hover:text-blue-500 ")
              }
            >
              Testimonial
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <div className="flex w-full mt-2 mb-2 -mx-2 justify-center">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Facebook className="h-6 w-6" />
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Twitter className="h-6 w-6" />
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Tiktok className="h-6 w-6" />
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Youtube className="h-6 w-6" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "home"
                  ? "  border-blue-500 text-blue-500"
                  : " border-transparent")
              }
            >
              <Home className="h-6 w-6"/>
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("About");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "About"
                  ? "  border-blue-500 text-blue-500"
                  : " border-transparent ")
              }
            >
              <About className="h-6 w-6" />
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="latestgames"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("latestgmaes");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "latestgames"
                  ? "  border-blue-500 text-blue-500"
                  : " border-transparent ")
              }
            >
              <Games className="h-6 w-6" />
              Games
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-blue-500 text-blue-500"
                  : " border-transparent ")
              }
            >
              <Testimonial className="h-6 w-6" />
              Testimonial
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
