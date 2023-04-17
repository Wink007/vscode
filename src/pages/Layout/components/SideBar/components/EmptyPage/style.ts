import styled from "styled-components";
import { NavLink } from "react-router-dom";

const EmptyNavigationComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 28px;
  padding: 13px 20px 0;
  font-size: 13px;

  & > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const NavLinkButtonStyle = styled(NavLink)`
  margin-top: 13px;
  padding: 4px;
  border-radius: 2px;
  background-color: #0e639c;
  color: ${({ theme }) => theme.colors.emptyButtonColor};
  font-size: 13px;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #1177bb;
  }
`;

export { EmptyNavigationComponentWrapper, NavLinkButtonStyle };
