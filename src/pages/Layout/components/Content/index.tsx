import { FunctionComponent, memo, useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CustomLayoutContext } from "../../../../components/CustomizeLayout/CustomLayoutContext/CustomLayoutContext";
import { Popup } from "../../../../components/Popup";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Bar } from "../Bar";
import { BreadCrumbs } from "../BreadCrumbs";
import { Tabs } from "../Tabs";

import { PopupContext } from "../../../../components/Popup/components/PopupContext";
import { useDispatch } from "react-redux";
import { popupType } from "../../../../redux/popupType/actions";
import { Settings } from "../MenuBar/components/Settings/component/ContentInside/data";
import { Footer } from "../../../../components/Footer";
import { ContentStyle, MainWrapperStyle } from "../../style";
import { HeaderPanel } from "../../../../components/HeaderPanel";

const ContentComponent: FunctionComponent = () => {
  const pages = useTypedSelector((state) => state.pages.pages);
  const {
    isPrimarySideBarOpened,
    layoutSideBarPosition,
    setIsPrimarySideBarOpened,
    isStatusBarOpened,
    setIsStatusBarOpened,
  } = useContext(CustomLayoutContext);

  const location = useLocation();
  const navigate = useNavigate();
  const isWelcomePage = location.pathname === "/";
  const isLeftPosition = layoutSideBarPosition === "left";

  const dispatch = useDispatch();
  const { handlePopupToggle } = useContext(PopupContext);

  const handleShortcut = (event: any) => {
    if (event.metaKey && event.key === ",") {
      event.preventDefault();
      dispatch(popupType(Settings.customizeLayout));
      handlePopupToggle();
    }

    if (event.metaKey && event.key === "e") {
      event.preventDefault();
      dispatch(popupType(Settings.theme));
      handlePopupToggle();
    }

    if (event.metaKey && event.key === "b") {
      event.preventDefault();
      setIsPrimarySideBarOpened(!isPrimarySideBarOpened);
    }

    if (event.metaKey && event.key === "j") {
      event.preventDefault();
      setIsStatusBarOpened(!isStatusBarOpened);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleShortcut);
    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, [isPrimarySideBarOpened, isStatusBarOpened]);

  useEffect(() => {
    if (pages.length === 0) {
      navigate("/");
      return;
    }
  }, [pages.length, navigate]);

  return (
    <>
      <HeaderPanel />
      <ContentStyle>
        {isLeftPosition && <Bar />}
        <MainWrapperStyle>
          {!isWelcomePage && (
            <>
              {!!pages.length && <Tabs />}
              <BreadCrumbs />
            </>
          )}
          <Outlet />
        </MainWrapperStyle>
        {!isLeftPosition && <Bar />}
      </ContentStyle>
      <Footer />
      <Popup />
    </>
  );
};
export const Content = memo(ContentComponent);
