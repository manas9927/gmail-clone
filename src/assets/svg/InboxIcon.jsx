import React from "react";

const InboxIcon = ({ className, fill }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4167 0.75H2.57417C1.55667 0.75 0.759167 1.56583 0.759167 2.58333L0.75 15.4167C0.75 16.425 1.55667 17.25 2.57417 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.56583 16.425 0.75 15.4167 0.75ZM15.4167 11.75H11.75C11.75 13.2717 10.5125 14.5 9 14.5C7.4875 14.5 6.25 13.2717 6.25 11.75H2.57417V2.58333H15.4167V11.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default InboxIcon;
