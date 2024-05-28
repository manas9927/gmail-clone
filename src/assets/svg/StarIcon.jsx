import React from "react";

const StarIcon = ({ className, fill }) => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3875 14.1886L9.99992 13.9547L9.61237 14.1886L5.46912 16.6893L6.56864 11.9761L6.67148 11.5353L6.32933 11.2389L2.66788 8.06696L7.48749 7.65807L7.93814 7.61983L8.11462 7.20342L9.99992 2.7552L11.8852 7.20342L12.0617 7.61983L12.5124 7.65807L17.332 8.06696L13.6705 11.2389L13.3284 11.5353L13.4312 11.9761L14.5307 16.6893L10.3875 14.1886Z"
        stroke="black"
        stroke-opacity="0.16"
        stroke-width="1.5"
      />
    </svg>
  );
};

export default StarIcon;
