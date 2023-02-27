import { memo, FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { navData } from "../SideBar/components/Navigation/data";
import { ImgStyle } from "../Tabs/style";
import { BreadCrumbsWrapper, PathStyle } from "./style";

const BreadCrumbsComponent: FunctionComponent = () => {
  const location = useLocation();
  const navDataItem = navData.filter((item) => item.link === location.pathname);
  return (
    <BreadCrumbsWrapper>
      alex klievtsov
      <span className="codicon codicon-chevron-right" />
      src
      <span className="codicon codicon-chevron-right" />
      <PathStyle>
        <ImgStyle>
          <img src={navDataItem[0].imgSrc} alt="" />
        </ImgStyle>
        <span>{navDataItem[0].link.replace("/", "")}</span>
      </PathStyle>
    </BreadCrumbsWrapper>
  );
};

export const BreadCrumbs = memo(BreadCrumbsComponent);
