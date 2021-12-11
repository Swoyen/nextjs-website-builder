import styled from "styled-components";

export const SidebarExtensionContainer = styled.div`
  width: 280px;
  max-height: 100vh;
  min-height: 100vh;
  position: absolute;
  top: 0px;
  padding-inline: ${(props) => (props.visible ? "1em" : "0")};
  left: ${(props) => (props.visible ? "40px" : "-340px")};
  z-index: 100;
  background: #1a1a1a;
  transition: all 0.4s;
  overflow: hidden;
`;
