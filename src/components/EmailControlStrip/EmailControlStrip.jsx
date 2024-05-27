import React from "react";
import {
  DownArrowIcon,
  DropdownIcon,
  MoreIcon,
  ReloadIcon,
} from "../../assets/svg";

const EmailControlStrip = () => {
  return (
    <div className="flex flex-row p-[14px] items-center justify-between">
      <div className="flex flex-row items-center justify-start">
        <input
          type="checkbox"
          className="border-[#0000008A] w-[15px] h-[15px]"
        />
        <DropdownIcon />
        <ReloadIcon className="ml-[16px]" />
        <MoreIcon className="ml-[30px]" />
      </div>
      <div className="flex flex-row items-center justify-start">
        <p className="text-[14px] text-primary-text p-[8px]">1–50 of 2,619</p>
        <DownArrowIcon className="ml-[15px] transform rotate-90" />
        <DownArrowIcon className="ml-[15px] transform -rotate-90" />
      </div>
    </div>
  );
};

export default EmailControlStrip;
