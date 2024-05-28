import React from "react";
import { LabelIcon, StarIcon } from "../../assets/svg";
import { formatTimestamp } from "../../utils/dateTime";

const EmailCard = ({ data }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start py-[11px] px-[17px] cursor-pointer ${
        data.read ? "bg-secondary-background" : "bg-primary-background"
      }`}
    >
      <div className="flex flex-row items-center justify-start w-[17%] gap-[8px]">
        <input
          type="checkbox"
          className="border-[#0000008A] w-[12px] h-[12px] cursor-pointer"
        />
        <StarIcon fill={data.starred ? "#EFD494" : "none"} />
        <LabelIcon />
        <p
          className={`text-[14px] text-primary-text ${
            !data.read && "font-bold"
          }`}
        >
          {data.senderName}
        </p>
      </div>
      <div className="flex flex-row items-center justify-start w-[74%] overflow-hidden whitespace-nowrap">
        <p
          className={`text-[14px] text-primary-text ${
            !data.read && "font-bold"
          }`}
        >
          {data.subject}
          <span className="font-normal"> - {data.body}</span>
        </p>
      </div>
      <div className="flex flex-row items-center justify-end w-[9%]">
        <p
          className={`text-[14px] text-primary-text ${
            !data.read && "font-bold"
          }`}
        >
          {formatTimestamp(data.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default EmailCard;
