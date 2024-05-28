import React from "react";
import {
  DownArrowIcon,
  DropdownIcon,
  MoreIcon,
  ReloadIcon,
} from "../../assets/svg";
import { humanizeNumber } from "../../utils/numbers";

const EmailControlStrip = ({ from, to, total }) => {
  return (
    <div className="flex flex-row p-[14px] items-center justify-between">
      <div className="flex flex-row items-center justify-start">
        <input
          type="checkbox"
          className="border-[#0000008A] w-[15px] h-[15px] cursor-pointer"
        />
        <DropdownIcon />
        <ReloadIcon className="ml-[16px] cursor-pointer" />
        <MoreIcon className="ml-[30px] cursor-pointer" />
      </div>
      <div className="flex flex-row items-center justify-start">
        <p className="text-[14px] text-primary-text p-[8px]">
          {from}–{to} of {humanizeNumber(total)}
        </p>
        <DownArrowIcon className="ml-[15px] transform rotate-90 cursor-pointer" />
        <DownArrowIcon className="ml-[15px] transform -rotate-90 cursor-pointer" />
      </div>
    </div>
  );
};

export default EmailControlStrip;
