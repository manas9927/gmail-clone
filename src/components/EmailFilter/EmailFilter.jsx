import React from "react";
import { emailFilters } from "../../data/emailFilters";

const EmailFilter = () => {
  return (
    <div className="flex flex-row items-center justify-start">
      {emailFilters.map((filter) => {
        return (
          <div
            style={{
              borderBottom: filter.isActive
                ? `2px solid ${filter.color}`
                : "none",
            }}
            className={`flex flex-row items-center justify-start px-[32px] py-[16px] gap-[20px] ${
              filter.isActive && ` border-b-2 border-[${filter.color}]`
            }`}
          >
            <filter.icon fill={filter.isActive ? filter.color : "#0000008A"} />
            <div className="flex flex-col items-start justify-start leading-[14.4px]">
              <p
                className={`${
                  filter.isActive
                    ? `text-[${filter.color}]`
                    : "text-primary-text"
                }`}
              >
                {filter.title}
                {filter.unreadCount && (
                  <span
                    style={{ backgroundColor: filter.color }}
                    className={`px-[4px] py-[1px] ml-[4px] text-[12px] text-white rounded-[2px]`}
                  >
                    {filter.unreadCount} New
                  </span>
                )}
              </p>
              {filter.customMessage && (
                <p className="text-[#0000005E] text-[12px]">
                  {filter.customMessage}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmailFilter;
