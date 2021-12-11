import React, { useState } from "react";
import {
  Button,
  ButtonContainer,
  ClickIcon,
  HoverIcon,
  Settings,
} from "./DButton.styles";
import { GiShirtButton } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getIsHighlighted, showOutline } from "../../../store/design";
import { useDispatch } from "react-redux";

const DButton = ({ component, tagId }) => {
  const dispatch = useDispatch();
  const [mouseEntered, setMouseEntered] = useState(false);
  // const [mouseClicked, setMouseClicked] = useState(false);
  const highlighted = useSelector(getIsHighlighted(tagId));
  return (
    <ButtonContainer onClick={() => dispatch(showOutline(tagId))}>
      {mouseEntered && !highlighted && (
        <HoverIcon>
          <GiShirtButton size="1.2rem" /> <span>Button</span>
        </HoverIcon>
      )}
      {highlighted && (
        <ClickIcon>
          <GiShirtButton size="1.2rem" />
          <span>Button</span>
          <Settings size="1.2rem" />
        </ClickIcon>
      )}
      <Button
        onMouseEnter={() => setMouseEntered(true)}
        onMouseLeave={() => setMouseEntered(false)}
        clicked={highlighted}
      >
        {component.content}
      </Button>
    </ButtonContainer>
  );
};

export default DButton;
