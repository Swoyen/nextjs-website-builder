import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { LayoutContainer } from "./Layout.styles";

const Layout = (props) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <main>{props.children}</main>
    </LayoutContainer>
  );
};

export default Layout;
