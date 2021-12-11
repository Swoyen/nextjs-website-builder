import styled from "styled-components";

export const SidebarContainer = styled.div`
  min-width: 40px;
  max-width: 40px;
  height: 100vh;
  overflow: hidden;
  background: black;

  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  z-index: 109;
`;

export const SidebarIcon = styled.div`
  border-bottom: 1px solid white;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  text-align: center;
  z-index: 110;
  padding-block: 10px;
`;
