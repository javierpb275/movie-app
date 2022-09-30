import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbarComponent from "../top-navigation-bar/top-navigation-bar.component";

export interface ILayoutComponentProps {}

const LayoutComponent: React.FunctionComponent<ILayoutComponentProps> = (
  props
) => {
  return (
    <div className="min-h-screen bg-[#101522] text-white">
      <TopNavbarComponent />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
