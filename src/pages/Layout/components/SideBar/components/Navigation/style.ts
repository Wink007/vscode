import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { NavigationComponentProps } from "./interface";

export const NavigationComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    align-items: center;
    height: 22px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const TitleStyle = styled.button`
  display: flex;
  align-items: center;
  height: 22px;
  padding-right: 2px;
  color: #cccccccc;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    box-shadow: inset 0px 0px 0px 1px #097fd1;
  }
`;

export const TitleWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-right: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CollapseIconStyle = styled.div`
  position: relative;
  margin-left: auto;
  z-index: 2;
  color: #ccc;
  cursor: pointer;
`;

export const NavigationListStyle = styled.div<NavigationComponentProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 13px;

  ${({ isHovered }) =>
    isHovered &&
    css`
      &:before {
        position: absolute;
        top: 0;
        left: 22px;
        width: 1px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.blockBorderColor};
        content: "";
      }
    `}
`;

export const NavLinkStyle = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 22px;
  padding-left: 32px;
  color: #9e9f9f;

  &:visited {
    color: #9e9f9f;
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.activeLink};
  }
  &:focus {
    box-shadow: inset 0px 0px 0px 1px #097fd1;
    background-color: #06395d;
    color: #fff;
  }

  &:hover:not(&.active) {
    background-color: #2a2d2e;
  }

  & > span {
    padding-bottom: 2px;
  }
`;

export const NameSpanStyle = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SubTitleStyle = styled.button`
  display: flex;
  align-items: center;
  height: 22px;
  padding-left: 16px;
  color: #cccccccc;
  font-size: 13px;
  cursor: pointer;

  &:focus {
    box-shadow: inset 0px 0px 0px 1px #097fd1;
    background-color: #06395d;
  }
`;

export const ImgStyle = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;
