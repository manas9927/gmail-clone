import React from "react";
import Add from "../../assets/images/add.png";
import { rightActionsList } from "../../data/rightActions";

const RightActions = () => {
  return (
    <div className="border-l-[0.5px] h-full flex flex-col items-center py-[24px] gap-[34px]">
      {rightActionsList.map((action) => (
        <img
          key={action.id}
          src={action.icon}
          alt={action.title}
          className="w-[20px] cursor-pointer"
        />
      ))}
      <hr className="w-[20px]" />
      <img src={Add} alt="Add" className="w-[20px] cursor-pointer" />
    </div>
  );
};

export default RightActions;
