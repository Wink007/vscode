import {
  FunctionComponent,
  memo,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removePage } from "../../../../redux/addPages/actions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { PageNames } from "../../../enum";
import { Tab } from "./component/Tab";
import {
  TabsComponentWrapperStyle,
  CloseIconStyle,
  ContentStyle,
} from "./style";

const TabsComponent: FunctionComponent = () => {
  const pages = useTypedSelector((state) => state.pages.pages);
  const [isHover, setIsMouseOver] = useState(false);

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const currentActiveIndex = pages.indexOf(location.pathname);

  const handleClick = (page: string) => {
    dispatch(removePage(page));
    setCurrentIndex(pages.indexOf(page));
    setIsMouseOver(false);
  };

  const handleTabHover = useCallback(() => setIsMouseOver((prev) => !prev), []);
  const handleCurrentTabClose = (item: string) => () => handleClick(item);

  useEffect(() => {
    if (currentIndex === 0 && currentActiveIndex === -1) {
      navigate(pages[0]);
      return;
    }
    if (currentIndex && currentIndex === 1) {
      navigate(pages[pages.length - 1]);
      return;
    }

    if (currentIndex === 0 && currentActiveIndex === 0) {
      navigate(pages[pages.length - 1]);
      return;
    }

    if (currentIndex === 0 && pages.length === currentIndex) {
      navigate(pages[currentIndex - 1]);
      return;
    }
    if (currentIndex && currentActiveIndex === -1 && currentIndex === 1) {
      navigate(pages[currentIndex]);
      return;
    }

    if (currentIndex && currentActiveIndex === -1) {
      navigate(pages[currentIndex - 1]);
      return;
    }

    if (currentIndex === 0 && currentIndex === currentActiveIndex) {
      navigate(pages[currentIndex]);
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages.length, currentIndex]);

  return (
    <TabsComponentWrapperStyle>
      {pages.map((item, index) => {
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
            <Tab
              item={item}
              onClose={handleCurrentTabClose(item)}
              currentPos={index}
            />
            <CloseIconStyle onClick={handleCurrentTabClose(item)}>
              <span className="codicon codicon-close" />
            </CloseIconStyle>
          </ContentStyle>
        );
      })}
    </TabsComponentWrapperStyle>
  );
};

export const Tabs = memo(TabsComponent);
