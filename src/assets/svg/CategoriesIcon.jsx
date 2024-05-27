import React from "react";

const CategoriesIcon = ({ className, fill }) => {
  return (
    <svg
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1608 1.35334C13.8308 0.885836 13.2808 0.583336 12.6667 0.583336L2.58333 0.592503C1.575 0.592503 0.75 1.40834 0.75 2.41667V11.5833C0.75 12.5917 1.575 13.4075 2.58333 13.4075L12.6667 13.4167C13.2808 13.4167 13.8308 13.1142 14.1608 12.6467L18.1667 7L14.1608 1.35334Z"
        fill={fill}
      />
    </svg>
  );
};

export default CategoriesIcon;
