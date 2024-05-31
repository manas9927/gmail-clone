import React from "react";
import GmailLogo from "../../assets/images/gmail-logo.png";
import {
  AppsIcon,
  HamburgerIcon,
  HelpIcon,
  SettingsIcon,
} from "../../assets/svg";
import Avatar from "../../assets/images/avatar.png";
import { SearchBar } from "../SearchBar";

const TopNavigation = () => (
  <div className="bg-primary-background flex flex-row items-center justify-start px-[18px] py-[9px] shadow-[0_-1px_0px_0px_#EDEFF1_inset] ">
    <div className="flex flex-row items-center justify-start p-[8px] w-[15%]">
      <HamburgerIcon className="mr-[20px] cursor-pointer" />
      <img
        src={GmailLogo}
        alt="Logo"
        className="w-[109px] h-[40px] cursor-pointer"
      />
    </div>
    <div className=" w-[50%] ">
      <SearchBar />
    </div>
    <div className="flex flex-row items-center justify-end  w-[35%] gap-[16px] ">
      <HelpIcon className="cursor-pointer" />
      <SettingsIcon className="cursor-pointer" />
      <AppsIcon className="cursor-pointer" />
      <img src={Avatar} alt="Profile" className="cursor-pointer" />
    </div>
  </div>
);

export default TopNavigation;
