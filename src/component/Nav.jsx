import React from "react";
import Logo from "../public/images/navbar/logo_opinia.png";
import Home from "../public/images/navbar/home.png";
import People from "../public/images/navbar/people.png";
import Chat from "../public/images/navbar/chat.png";
import Lonceng from "../public/images/navbar/lonceng.png";
import Avatar from "../public/images/navbar/avatar.png";
import Search from "../public/images/navbar/search.png";

export default function Nav() {
  return (
    <>
      <nav className="bg-white flex justify-between px-10 h-[80px] drop-shadow-nav text-normal">
        <div className="flex justify-center items-center">
          <img className="w-[169px] h-[54px]" src={Logo} alt="Logo Opinia" />
        </div>

        <div className="flex items-center">
          <div className="flex items-center rounded-[5px] w-[524px] h-[52px] box-border">
            <input
              typeof="text"
              className="bg-search-icon px-4 py-2 w-[524px] h-[52px] placeholder:text-gray-nav placeholder:text-[19px]"
              placeholder="Cari..."
            />
            <button className="absolute left-[68.5rem]">
              <img src={Search} alt="" />
            </button>
          </div>
        </div>

        <div className="flex">
          <ul className="flex justify-center items-center gap-3">
            <li className="flex items-center justify-center w-[50px] h-[50px] bg-nav-icon rounded-full">
              <img className="w-[22px] h-[22px]" src={Home} alt="" />
            </li>
            <li className="flex items-center justify-center w-[50px] h-[50px] bg-nav-icon rounded-full">
              <img className="w-[22px] h-[22px]" src={People} alt="" />
            </li>
            <li className="flex items-center justify-center w-[50px] h-[50px] bg-nav-icon rounded-full">
              <img className="w-[22px] h-[22px]" src={Chat} alt="" />
            </li>
            <li className="flex items-center justify-center w-[50px] h-[50px] bg-nav-icon rounded-full">
              <img className="w-[22px] h-[22px]" src={Lonceng} alt="" />
            </li>
            <li className="flex items-center justify-center w-[50px] h-[50px] bg-nav-icon rounded-full">
              <img className="w-full h-full" src={Avatar} alt="" />
            </li>
            {/* object-cover w-16 h-16 border-2 border-green-600 rounded-full */}
          </ul>
        </div>
      </nav>
    </>
  );
}
