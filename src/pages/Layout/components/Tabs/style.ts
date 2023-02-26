import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const CloseIconStyle = styled.button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0 4px;
  border-radius: 4px;
  opacity: 0;
  pointer-events: all;
  cursor: pointer;

  &:hover {
    background-color: rgba(90, 93, 94, 0.31);
  }
`;

const TabsComponentWrapperStyle = styled.div`
  display: flex;
  width: max-content;
  min-width: fit-content;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.sideBarBackground};
`;

const ContentStyle = styled.div<{ isHover: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.colors.blockBorderColor};
  pointer-events: all;

  ${({ isHover }) =>
    isHover &&
    css`
      &:hover {
        ${CloseIconStyle} {
          opacity: 1;
          color: inherit;
        }
      }
    `}
`;

const TabStyleWrapper = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  font-size: 13px;
  white-space: nowrap;
  z-index: 1;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: calc(100% + 26px);
    height: 35px;
    background-color: ${({ theme }) => theme.colors.sideBarBackground};
    z-index: -1;
    content: "";
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.background};
    color: rgba(255, 255, 255, 1);

    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      width: calc(100% + 26px);
      height: 1px;
      background-color: rgba(255, 255, 255, 1);
      content: "";
    }

    &::after {
      background-color: ${({ theme }) => theme.colors.background};
      color: rgba(255, 255, 255, 1);
    }

    & + ${CloseIconStyle} {
      opacity: 1;
      color: rgba(255, 255, 255, 1);
    }

    &:hover {
      ${CloseIconStyle} {
        opacity: 1;
      }
    }
  }
`;

const ImgStyle = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

export {
  CloseIconStyle,
  TabsComponentWrapperStyle,
  ContentStyle,
  ImgStyle,
  TabStyleWrapper,
};
