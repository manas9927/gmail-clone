import React from "react";

const StarredIcon = ({ className, fill }) => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99998 14.8308L15.665 18.25L14.1616 11.8058L19.1666 7.47001L12.5758 6.91084L9.99998 0.833344L7.42415 6.91084L0.833313 7.47001L5.83831 11.8058L4.33498 18.25L9.99998 14.8308Z"
        fill={fill}
      />
    </svg>
  );
};

export default StarredIcon;
