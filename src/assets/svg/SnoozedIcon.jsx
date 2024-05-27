import React from "react";

const SnoozedIcon = ({ className, fill }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99998 0.833328C4.95831 0.833328 0.833313 4.95833 0.833313 10C0.833313 15.0417 4.95831 19.1667 9.99998 19.1667C15.0416 19.1667 19.1666 15.0417 19.1666 10C19.1666 4.95833 15.0416 0.833328 9.99998 0.833328ZM13.85 13.85L9.08331 10.9167V5.41666H10.4583V10.1833L14.5833 12.6583L13.85 13.85Z"
        fill={fill}
      />
    </svg>
  );
};

export default SnoozedIcon;
