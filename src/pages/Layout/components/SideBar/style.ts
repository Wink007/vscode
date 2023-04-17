import styled, { css } from "styled-components";

interface SideBarContentProps {
  isOpen: boolean;
}

const SideBarContent = styled.div<SideBarContentProps>`
  width: 300px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.blockBorderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.blockBorderColor};
  background: ${({ theme }) => theme.colors.sideBarBackground};
`;

const SideBarWrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 1;

  & .title {
    height: 35px;
    font-size: 11px;
    padding: 0 8px 0 16px;
  }
`;

const ResizePanelStyle = styled.div<{ isLeftPosition: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  margin-left: -10px;
  cursor: col-resize;
  opacity: 0;

  ${({ isLeftPosition }) =>
    !isLeftPosition &&
    css`
      left: 0;
    `}
`;

const DragElementStyle = styled.div<{
  hoveredClass: boolean;
  isLeftPosition: boolean;
}>`
  position: absolute;
  top: 0;
  right: 0px;
  width: 3px;
  height: 100%;
  background-color: #007acc;
  opacity: 0;

  ${({ hoveredClass }) =>
    hoveredClass &&
    css`
      opacity: 1;
    `}

  ${({ isLeftPosition }) =>
    !isLeftPosition &&
    css`
      left: 0px;
    `}
`;

export { SideBarContent, SideBarWrapper, DragElementStyle, ResizePanelStyle };
