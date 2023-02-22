import { FunctionComponent, memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removePage } from "../../../../redux/addPages/actions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { tabLists } from "./data";
import { PageNames } from '../../../enum';
import {
  TabsComponentWrapperStyle,
  TabStyle,
  CloseIconStyle,
  ContentStyle,
  ImgStyle,
} from "./style";

const TabsComponent: FunctionComponent = () => {
  const pages = useTypedSelector((state) => state.pages.pages);
  const [isHover, setIsMouseOver] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const currentActiveIndex = pages.indexOf(location);

  const handleClick = (page: string) => {
    dispatch(removePage(page));
    setCurrentIndex(pages.indexOf(page));
    setIsMouseOver(false);
  };

  const handleTabHover = () => setIsMouseOver((prev) => !prev);

  useEffect(() => {
    if (currentIndex === 0 && currentActiveIndex === -1) {
      navigate(pages[0]);
    }

    if (currentIndex === 0 && currentActiveIndex === 0) {
      navigate(pages[pages.length - 1]);
    }

    if (currentIndex === 0 && pages.length === currentIndex) {
      navigate(pages[currentIndex - 1]);
    }

    if (currentIndex && currentActiveIndex === -1) {
      navigate(pages[currentIndex - 1]);
    }

    if (currentIndex === 0 && currentIndex === currentActiveIndex) {
      navigate(pages[currentIndex]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages.length]);

  return (
    <TabsComponentWrapperStyle>
      {pages.map((item) => {
        if (item === PageNames.welcome) {
          return null;
        }

        return (
          <ContentStyle
            key={item}
            onMouseEnter={handleTabHover}
            onMouseLeave={handleTabHover}
            isHover={isHover}
          >
            <TabStyle to={item}>
              <ImgStyle>
                <img src={tabLists[item].imgSrc} alt="" />
              </ImgStyle>
              {tabLists[item].path}
            </TabStyle>
            {
              <CloseIconStyle onClick={() => handleClick(item)}>
                <span className="codicon codicon-close" />
              </CloseIconStyle>
            }
          </ContentStyle>
        );
      })}
    </TabsComponentWrapperStyle>
  );
};

export const Tabs = memo(TabsComponent);
