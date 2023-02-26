import { memo, FunctionComponent, useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ContentInsideStyleWrapper,
  ItemStyle,
  LabelStyle,
} from "../../../../../../assets/commonStyles/style";
import { Tooltip } from "../../../../../../components/Tooltip";
import {
  resetPages,
  closeRight,
} from "../../../../../../redux/addPages/actions";
import { PageNames } from "../../../../../enum";
import { tabLists } from "../../data";
import { TabProps } from "../../interface";
import { ImgStyle, TabStyleWrapper } from "../../style";
import {
  closeLeft,
  closeOther,
} from "../../../../../../redux/addPages/actions";

const TabComponent: FunctionComponent<TabProps> = ({
  item,
  onClose,
  currentPos,
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRightClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsTooltipOpen((prev) => !prev);
    setCurrentIndex(currentPos);
    return;
  };

  const handleClick = () => {
    setIsTooltipOpen(false);
  };

  const handleOnBlur = () => {
    setIsTooltipOpen(false);
  };

  const handleResetPages = () => {
    dispatch(resetPages());
    navigate(PageNames.welcome);
  };

  const handleRemoveRight = () => {
    if (currentIndex) {
      dispatch(closeRight(currentIndex));
    }
  };

  const handleRemoveLeft = () => {
    if (currentIndex) {
      dispatch(closeLeft(currentIndex));
    }
  };

  const handleRemoveOther = () => {
    if (currentIndex) {
      dispatch(closeOther(currentIndex));
    }
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
            <ItemStyle onClick={handleRemoveRight}>
              <LabelStyle>Close to the Right</LabelStyle>
            </ItemStyle>
            <ItemStyle onClick={handleRemoveLeft}>
              <LabelStyle>Close to the Left</LabelStyle>
            </ItemStyle>
            <ItemStyle onClick={handleRemoveOther}>
              <LabelStyle>Close Other</LabelStyle>
            </ItemStyle>
          </ContentInsideStyleWrapper>
        </Tooltip>
      )}
    </TabStyleWrapper>
  );
};

export const Tab = memo(TabComponent);
