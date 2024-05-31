import React, { useState } from "react";
import {
  AddIcon,
  JoinMeetingIcon,
  DownArrowIcon,
  NewMeetingIcon,
} from "../../assets/svg";
import { labels } from "../../data/labels";

const SideNavigation = () => {
  const [isActive, setIsActive] = useState(1);

  const toggleActive = (id) => {
    setIsActive(id);
  };
  return (
    <div className="bg-primary-background h-full flex flex-col py-[15px] items-start justify-start relative">
      <button className="mx-[8px] p-[12px] rounded-[40px] shadow-[0px_1px_2px_0px_#00000026,0px_1px_3px_1px_#00000026] flex flex-row items-center justify-center">
        <AddIcon className="mr-[8px]" />
        <p className="text-[13px] text-[#3D4043] mx-[8px]">Compose</p>
      </button>
      <div className="flex flex-col pt-[16px] pr-[16px] w-full">
        {labels.map((label) => (
          <div
            key={label.id}
            onClick={() => {
              toggleActive(label.id);
            }}
            className={`flex flex-row items-center justify-start  cursor-pointer pl-[24px] py-[7.75px] rounded-[0px_32px_32px_0px] ${
              label.id === isActive ? "bg-[#F9E9E7]" : "hover:bg-gmail-grey1"
            }`}
          >
            <div className="w-[15%]">
              <label.icon
                fill={`${label.id === isActive ? "#C84031" : "#0000008A"} `}
              />
            </div>
            <p
              className={`w-[70%] ${
                label.id === isActive ? "text-[#C84031]" : "text-primary-text "
              }  ${label.unreadCount && "font-bold"}`}
            >
              {label.title}
            </p>
            <p
              className={`w-[10%] ${
                label.id === isActive ? "text-[#C84031]" : "text-primary-text "
              } ${label.unreadCount && "font-bold"}`}
            >
              {label.unreadCount ?? ""}
            </p>
          </div>
        ))}
        <div className="flex flex-row items-center justify-center  w-1/2 gap-[21.5px] py-[8px] cursor-pointer">
          <DownArrowIcon />
          <p>More</p>
        </div>
      </div>
      <div className="mt-auto flex flex-col w-full text-primary-text">
        <hr />
        <div className="py-[16px] px-[24px] h-full flex flex-col">
          <p className="font-medium my-[8px]">Meet</p>
          <button className="flex flex-row items-center justify-start py-[8px]">
            <div className="w-[15%]">
              <NewMeetingIcon />
            </div>
            <p className="text-[14px]">New meeting</p>
          </button>
          <button className="flex flex-row items-center justify-start py-[8px]">
            <div className="w-[15%]">
              <JoinMeetingIcon />
            </div>
            <p className="text-[14px]">Join a meeting</p>
          </button>
        </div>
        <hr />
        <div className="py-[16px] px-[24px] h-full flex flex-col">
          <p className="font-medium my-[8px]">Hangouts</p>
          <button className="bg-gmail-blue2 text-white py-[8px] mt-[16px] rounded-[2px]">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
