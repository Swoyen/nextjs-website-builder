import React, { useState } from "react";
import { LayoutHeader } from "../../Layout/Layout.styles";
import SidebarElementCollection from "../SidebarElementColllection/SidebarElementCollection";
import { SidebarExtensionContainer } from "./SidebarExtension.styles";
import { IoClose } from "react-icons/io5";
const SidebarExtension = ({ visible }) => {
  return (
    <SidebarExtensionContainer visible={visible}>
      <IoClose />
      <h2>Design</h2>
      {/* <LayoutHeader>Design</LayoutHeader>
  <SidebarElementCollection /> */}
      <SidebarElementCollection />
    </SidebarExtensionContainer>
  );
};

export default SidebarExtension;
