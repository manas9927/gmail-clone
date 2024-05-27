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
  <div className="bg-primary-background w-full flex flex-row items-center justify-start px-[18px] py-[9px]">
    <div className="flex flex-row items-center justify-start p-[8px] w-2/12">
      <HamburgerIcon className="mr-[20px]" />
      <img src={GmailLogo} alt="" className="w-[109px] h-[40px]" />
    </div>
    <div className="w-6/12">
      <SearchBar />
    </div>
    <div className="flex flex-row items-center justify-end w-4/12 gap-[16px] ">
      <HelpIcon />
      <SettingsIcon />
      <AppsIcon />
      <img src={Avatar} alt="" />
    </div>
  </div>
);

export default TopNavigation;
