import React from "react";

const InfoIcon = ({ className, fill }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1.83334C5.94001 1.83334 1.83334 5.94001 1.83334 11C1.83334 16.06 5.94001 20.1667 11 20.1667C16.06 20.1667 20.1667 16.06 20.1667 11C20.1667 5.94001 16.06 1.83334 11 1.83334ZM11.9167 15.5833H10.0833V10.0833H11.9167V15.5833ZM11.9167 8.25001H10.0833V6.41668H11.9167V8.25001Z"
        fill={fill}
      />
    </svg>
  );
};

export default InfoIcon;
