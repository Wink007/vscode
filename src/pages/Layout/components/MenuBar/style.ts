import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.menuBarBackground};
`;

export const LinkStyle = styled(NavLink)`
  position: relative;
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 5px;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.3;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  &.active {
    color: rgba(255, 255, 255, 1);

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 2px;
      height: 100%;
      background-color: #fff;
      content: "";
    }
  }
`;
