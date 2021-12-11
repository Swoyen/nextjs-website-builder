import { FiSettings } from "react-icons/fi";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
`;

export const Button = styled.button`
  margin: 0.5em;
  padding: 0.5em 1em;
  display: block;
  outline: ${(props) =>
    props.clicked ? "2px solid green" : "1px solid black"};
`;

export const HoverIcon = styled.div`
  position: absolute;
  top: -25px;
  left: 0.4em;
  border-radius: 5px;
  padding: 5px;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  background: green;
  align-items: center;
  font-weight: 600;
  gap: 5px;
`;
export const ClickIcon = styled.div`
  position: absolute;
  top: -25px;
  left: 0.4em;
  border-radius: 5px;
  padding: 5px;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  background: green;
  align-items: center;
  font-weight: 600;
  gap: 5px;
`;

export const Settings = styled(FiSettings)`
  cursor: pointer;
  transition: all 0.4s;
  color: rgba(0, 0, 0, 0.8);
  &:hover {
    color: rgba(0, 0, 0, 1);
    transform: scale(1.05);
  }
  border-left: 1px solid black;
  padding-left: 5px;
`;
