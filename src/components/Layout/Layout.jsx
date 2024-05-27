import React from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import { SideNavigation } from "../SideNavigation";

const Layout = () => (
  <div className="bg-gray-400 flex flex-col h-screen w-screen">
    <TopNavigation />
    <SideNavigation />
  </div>
);

export default Layout;
