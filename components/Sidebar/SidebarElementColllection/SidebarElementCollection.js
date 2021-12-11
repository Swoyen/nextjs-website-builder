import React from "react";
import {
  buttonComponent,
  headerComponent,
  pComponent,
} from "../../../data/designComponents";
import SidebarElement from "../SidebarElement/SidebarElement";
import { CollectionHeader } from "../SidebarElement/SidebarElement.styles";
import { CollectionContainer } from "./SidebarElementCollection.styles";

const SidebarElementCollection = () => {
  return (
    <>
      <CollectionHeader>Header</CollectionHeader>
      <CollectionContainer>
        <SidebarElement component={buttonComponent} />
        <SidebarElement component={pComponent} />
        <SidebarElement component={headerComponent} />
      </CollectionContainer>
    </>
  );
};

export default SidebarElementCollection;
