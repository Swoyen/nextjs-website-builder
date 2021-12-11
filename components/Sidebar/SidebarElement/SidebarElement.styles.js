import styled from "styled-components";

export const SidebarElementContainer = styled.div`
  min-width: 75px;
  min-height: 75px;
  border: 1px solid white;
  text-align: center;
  padding: 0.5em;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.4s;
  }
`;

export const CollectionHeader = styled.h3``;
