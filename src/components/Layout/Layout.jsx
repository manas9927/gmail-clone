import React from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import { SideNavigation } from "../SideNavigation";
import { RightActions } from "../RightActions";

const Layout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <TopNavigation />
    <div className=" flex flex-row h-full">
      <div className="h-full w-[15%]">
        <SideNavigation />
      </div>
      <div className="h-full w-[82%]">{children}</div>
      <div className="h-full w-[3%]">
        <RightActions />
      </div>
    </div>
  </div>
);

export default Layout;
