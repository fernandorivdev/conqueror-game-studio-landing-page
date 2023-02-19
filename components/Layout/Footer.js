import React from "react";
import Logo from "../../public/assets/Logo.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-36 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-3 sm:col-end-3 flex flex-col items-start ">
          <Logo className="  h-48 w-auto mb-6" />    
        </div>
        
        <div className="row-span-2 sm:col-span-2 sm:col-start-4 sm:col-end-9 flex flex-col">
          <p className="mb-4">
            <strong className="font-medium">Conqueror Game Studio</strong> is an Indie Startup that is developing games of different genres, that are entertaining and fun for casual and the most demanding gamers.
          </p>
        
          <p className="text-gray-400">©{new Date().getFullYear()} - Conqueror Game Studio</p>

        </div>
        
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Pages</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Games</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Nebula's Starships{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Multiverse Jumper{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Jelly Crush{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
