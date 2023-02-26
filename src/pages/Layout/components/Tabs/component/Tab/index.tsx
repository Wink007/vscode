import { memo, FunctionComponent, useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ContentInsideStyleWrapper,
  ItemStyle,
  LabelStyle,
} from "../../../../../../assets/commonStyles/style";
import { Tooltip } from "../../../../../../components/Tooltip";
import { resetPages } from "../../../../../../redux/addPages/actions";
import { PageNames } from "../../../../../enum";
import { tabLists } from "../../data";
import { TabProps } from "../../interface";
import { ImgStyle, TabStyleWrapper } from "../../style";

const TabComponent: FunctionComponent<TabProps> = ({ item, onClose }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRightClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsTooltipOpen((prev) => !prev);
    return;
  };

  const handleClick = () => {
    setIsTooltipOpen(false);
  };

  const handleOnBlur = () => {
    setIsTooltipOpen(false);
  };

  const handleResetPages = () => {
    navigate(PageNames.welcome);
    dispatch(resetPages());
  };

  return (
    <TabStyleWrapper
      to={item}
      onContextMenu={handleRightClick}
      onBlur={handleOnBlur}
      onClick={handleClick}
    >
      <ImgStyle>
        <img src={tabLists[item].imgSrc} alt="" />
      </ImgStyle>
      {tabLists[item].path}
      {isTooltipOpen && (
        <Tooltip position="bottom">
          <ContentInsideStyleWrapper>
            <ItemStyle onClick={onClose}>
              <LabelStyle>Close</LabelStyle>
            </ItemStyle>
            <ItemStyle onClick={handleResetPages}>
              <LabelStyle>Close All</LabelStyle>
            </ItemStyle>
          </ContentInsideStyleWrapper>
        </Tooltip>
      )}
    </TabStyleWrapper>
  );
};

export const Tab = memo(TabComponent);
