import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const ActiveLineStyle = styled.div<{ isLeftPosition: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #fff;
  content: "";
  opacity: 0;

  ${({ isLeftPosition }) =>
    !isLeftPosition &&
    css`
      right: 0;
      left: auto;
    `}
`;

const ListItemWrapperStyle = styled(NavLink)`
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
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  &.active {
    color: rgba(255, 255, 255, 1);

    ${ActiveLineStyle} {
      opacity: 1;
    }
  }
`;

const SpanIcon = styled.span`
  font-size: 24px !important;
`;

export { ListItemWrapperStyle, SpanIcon, ActiveLineStyle };
