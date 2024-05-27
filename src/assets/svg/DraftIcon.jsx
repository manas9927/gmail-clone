import React from "react";

const DraftIcon = ({ className, fill }) => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.50002 0.833328C1.49169 0.833328 0.675854 1.65833 0.675854 2.66666L0.666687 17.3333C0.666687 18.3417 1.48252 19.1667 2.49085 19.1667H13.5C14.5084 19.1667 15.3334 18.3417 15.3334 17.3333V6.33333L9.83335 0.833328H2.50002ZM8.91669 7.25V2.20833L13.9584 7.25H8.91669Z"
        fill={fill}
      />
    </svg>
  );
};

export default DraftIcon;
