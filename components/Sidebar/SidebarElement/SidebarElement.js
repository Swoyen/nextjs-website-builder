import React from "react";
import { useDispatch } from "react-redux";
import { addComponent } from "../../../store/design";
import { SidebarElementContainer } from "./SidebarElement.styles";

const SidebarElement = ({ component }) => {
  const dispatch = useDispatch();
  return (
    <SidebarElementContainer onClick={() => dispatch(addComponent(component))}>
      {component.name}
    </SidebarElementContainer>
  );
};

export default SidebarElement;
