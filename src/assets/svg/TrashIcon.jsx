import React from "react";

const TrashIcon = ({ className, fill }) => {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.49998 15.4167C1.49998 16.425 2.32498 17.25 3.33331 17.25H10.6666C11.675 17.25 12.5 16.425 12.5 15.4167V4.41667H1.49998V15.4167ZM13.4166 1.66667H10.2083L9.29165 0.75H4.70831L3.79165 1.66667H0.583313V3.5H13.4166V1.66667Z"
        fill={fill}
      />
    </svg>
  );
};

export default TrashIcon;
