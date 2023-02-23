import { FunctionComponent, memo, useState, useEffect } from "react";
import { navData, pathTemplate } from "./data";
import { NavigationComponentProps } from "./interface";
import { useDispatch } from "react-redux";
import { addPage } from "../../../../../../redux/addPages/actions";
import {
  NavigationComponentWrapper,
  NavigationListStyle,
  TitleWrapperStyle,
  TitleStyle,
  NavLinkStyle,
  NameSpanStyle,
  SubTitleStyle,
  CollapseIconStyle,
  ImgStyle,
} from "./style";
import { useGetUrl } from "../../../../../../hooks/useGetUrl";
import { PageNames } from "../../../../../enum";
import { EmptyNavigation } from "../EmptyPage";

const NavigationComponent: FunctionComponent<NavigationComponentProps> = ({
  isHovered,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenFolder, setIsOpenFolder] = useState(true);
  const dispatch = useDispatch();
  const url = useGetUrl();

  const isEmptyPage = url === PageNames.welcome;
  const folderName = isEmptyPage ? "no folder opened" : "alex klievtsov";
  const expandCollapseIcon = isOpenFolder ? "expand-all" : "collapse-all";

  const chevronIcon = isOpen ? "chevron-down" : "chevron-right";
  const chevronIconFolder = isOpenFolder ? "chevron-down" : "chevron-right";

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickFolder = () => {
    setIsOpenFolder(false);
  };

  const handleClickFolderFiles = () => {
    setIsOpenFolder((prev) => !prev);
  };

  useEffect(() => {
    dispatch(addPage(url));
  }, [url, dispatch]);

  return (
    <NavigationComponentWrapper>
      <TitleStyle>
        <TitleWrapperStyle onClick={handleClick}>
          <span className={`codicon codicon-${chevronIcon}`} />
          <NameSpanStyle>{folderName}</NameSpanStyle>
        </TitleWrapperStyle>
        {!isEmptyPage && isOpen && (
          <CollapseIconStyle
            onClick={handleClickFolder}
            title="Collapse Folders in Explorer"
            className={`codicon codicon-${expandCollapseIcon}`}
          />
        )}
      </TitleStyle>
      {isOpen && isEmptyPage && <EmptyNavigation />}
      {isOpen && !isEmptyPage && (
        <>
          <SubTitleStyle onClick={handleClickFolderFiles}>
            <span className={`codicon codicon-${chevronIconFolder}`} />
            <span>src</span>
          </SubTitleStyle>
          {isOpenFolder && (
            <NavigationListStyle isHovered={isHovered}>
              {navData.map(({ title, imgSrc, link }) => {
                const tooltipName = `${pathTemplate}/${title}`;
                return (
                  <NavLinkStyle key={title} title={tooltipName} to={link}>
                    <ImgStyle>
                      <img src={imgSrc} alt="" />
                    </ImgStyle>
                    <span>{title}</span>
                  </NavLinkStyle>
                );
              })}
            </NavigationListStyle>
          )}
        </>
      )}
    </NavigationComponentWrapper>
  );
};

export const Navigation = memo(NavigationComponent);
