import { FunctionComponent, memo } from "react";
import { EmptyNavigationComponentWrapper, NavLinkButtonStyle } from "./style";
import { PageNames } from "../../../../../enum";

const EmptyNavigationComponent: FunctionComponent = () => (
  <EmptyNavigationComponentWrapper>
    <p>You have not yet opened a folder</p>
    <NavLinkButtonStyle to={PageNames.home}>Open Home</NavLinkButtonStyle>
    <NavLinkButtonStyle to={PageNames.contact}>Open Contact</NavLinkButtonStyle>
  </EmptyNavigationComponentWrapper>
);

export const EmptyNavigation = memo(EmptyNavigationComponent);
