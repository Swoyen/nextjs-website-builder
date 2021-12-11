import React, { useState } from "react";
import { LayoutHeader } from "../Layout/Layout.styles";
import { SidebarContainer, SidebarIcon } from "./Sidebar.styles";
import SidebarElementCollection from "./SidebarElementColllection/SidebarElementCollection";
import SidebarExtension from "./SidebarExtension/SidebarExtension";
import { HiOutlineViewGridAdd } from "react-icons/hi";
const Sidebar = () => {
  const [extensionShown, setExtensionShown] = useState(false);

  return (
    <SidebarContainer>
      {/* <LayoutHeader>Design</LayoutHeader>
      <SidebarElementCollection /> */}
      <SidebarIcon onClick={() => setExtensionShown(!extensionShown)}>
        <HiOutlineViewGridAdd size="1.5rem" />
      </SidebarIcon>
      <SidebarIcon>
        <HiOutlineViewGridAdd size="1.5rem" />
      </SidebarIcon>
      <SidebarIcon>
        <HiOutlineViewGridAdd size="1.5rem" />
      </SidebarIcon>
      <SidebarIcon>
        <HiOutlineViewGridAdd size="1.5rem" />
      </SidebarIcon>
      <HiOutlineViewGridAdd />
      <SidebarExtension visible={extensionShown} />
    </SidebarContainer>
  );
};

export default Sidebar;
