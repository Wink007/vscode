import {
  memo,
  FunctionComponent,
  useState,
  MouseEvent,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
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
import { useTypedSelector } from "../../../../../../hooks/useTypedSelector";

const TabComponent: FunctionComponent<TabProps> = ({
  item,
  onClose,
  currentPos,
}) => {
  const pages = useTypedSelector((state) => state.pages.pages);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isDisabledRight, setIsDisabledRight] = useState(false);
  const [isDisabledLeft, setIsDisabledLeft] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

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

  useEffect(() => {
    if (currentIndex && pages[pages.length - 1] === pages[currentIndex]) {
      setIsDisabledRight(true);
      return;
    }
    setIsDisabledRight(false);
  }, [currentIndex, isDisabledRight, location.pathname]);

  useEffect(() => {
    if (currentIndex && pages[1] === pages[currentIndex]) {
      setIsDisabledLeft(true);
      return;
    }
    setIsDisabledLeft(false);
  }, [currentIndex, isDisabledLeft, location.pathname]);

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
            <ItemStyle onClick={handleRemoveOther}>
              <LabelStyle>Close Others</LabelStyle>
            </ItemStyle>
            {!isDisabledRight && (
              <ItemStyle onClick={handleRemoveRight}>
                <LabelStyle>Close to the Right</LabelStyle>
              </ItemStyle>
            )}
            {!isDisabledLeft && (
              <ItemStyle onClick={handleRemoveLeft}>
                <LabelStyle>Close to the Left</LabelStyle>
              </ItemStyle>
            )}
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
