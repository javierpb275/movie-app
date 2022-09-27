import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbarComponent from "../top-navigation-bar/top-navigation-bar.component";

export interface ILayoutComponentProps {}

const LayoutComponent: React.FunctionComponent<ILayoutComponentProps> = (
  props
) => {
  return (
    <div className="bg-black text-white">
      <TopNavbarComponent />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
