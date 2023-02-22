import { memo, FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumbsWrapper } from "./style";

const BreadCrumbsComponent: FunctionComponent = () => {
  const location = useLocation();

  return (
    <BreadCrumbsWrapper>
      alex klievtsov
      <span className="codicon codicon-chevron-right" />
      src
      <span className="codicon codicon-chevron-right" />
      {location.pathname.replace("/", "")}
    </BreadCrumbsWrapper>
  );
};

export const BreadCrumbs = memo(BreadCrumbsComponent);
