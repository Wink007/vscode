import { FunctionComponent, memo, useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CustomLayoutContext } from "../../../../components/CustomizeLayout/CustomLayoutContext/CustomLayoutContext";
import { Popup } from "../../../../components/Popup";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Bar } from "../Bar";
import { BreadCrumbs } from "../BreadCrumbs";
import { Footer } from "../Footer";
import { HeaderPanel } from "../HeaderPanel";
import { Tabs } from "../Tabs";

import { ContentStyle, MainWrapperStyle } from "../../style";

const ContentComponent: FunctionComponent = () => {
  const pages = useTypedSelector((state) => state.pages.pages);
  const { layoutSideBarPosition } = useContext(CustomLayoutContext);

  const location = useLocation();
  const navigate = useNavigate();
  const isWelcomePage = location.pathname === "/";
  const isLeftPosition = layoutSideBarPosition === "left";

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
