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
  border-radius: ${({ theme }) => theme.borderRadiusS};
  opacity: 0;
  pointer-events: all;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
    color: ${({ theme }) => theme.colors.activeColor};
  }
`;

const TabsComponentWrapperStyle = styled.div`
  display: flex;
  /* width: max-content; */
  width: 100%;
  min-width: fit-content;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.tabPanelBackground};
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
          color: ${({ theme }) => theme.colors.activeColor};
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
    background-color: ${({ theme }) => theme.colors.tabBackground};
    z-index: -1;
    content: "";
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.activeTabBackground};
    color: ${({ theme }) => theme.colors.activeColor};

    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      width: calc(100% + 26px);
      height: 1px;
      background-color: ${({ theme }) => theme.colors.activeColor};
      content: "";
    }

    &::after {
      background-color: ${({ theme }) => theme.colors.activeTabBackground};
      color: ${({ theme }) => theme.colors.activeColor};
    }

    & + ${CloseIconStyle} {
      opacity: 1;
      color: ${({ theme }) => theme.colors.activeColor};
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
