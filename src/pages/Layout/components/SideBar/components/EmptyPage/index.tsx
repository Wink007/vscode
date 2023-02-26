import { FunctionComponent, memo } from "react";
import { EmptyNavigationComponentWrapper, NavLinkButtonStyle } from "./style";
import { PageNames } from "../../../../../enum";
import { useDispatch } from "react-redux";
import { addPage } from "../../../../../../redux/addPages/actions";

const EmptyNavigationComponent: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleAddPage = (link: string) => {
    dispatch(addPage(link));
  };

  return (
    <EmptyNavigationComponentWrapper>
      <p>You have not yet opened a folder</p>
      <NavLinkButtonStyle
        to={PageNames.home}
        onClick={() => handleAddPage(PageNames.home)}
      >
        Open Home
      </NavLinkButtonStyle>
      <NavLinkButtonStyle
        to={PageNames.contact}
        onClick={() => handleAddPage(PageNames.contact)}
      >
        Open Contact
      </NavLinkButtonStyle>
    </EmptyNavigationComponentWrapper>
  );
};

export const EmptyNavigation = memo(EmptyNavigationComponent);
