import { FunctionComponent, memo } from "react";
import { HeaderPage } from "../../components/HeaderPage";

const PortfolioComponent: FunctionComponent = () => {
  return <HeaderPage title="Portfolio Page" />;
};

export const Portfolio = memo(PortfolioComponent);
