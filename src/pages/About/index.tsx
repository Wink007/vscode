import { FunctionComponent, memo } from "react";
import { HeaderPage } from "../../components/HeaderPage";

const AboutComponent: FunctionComponent = () => {
  return <HeaderPage title="About Page" />;
};

export const About = memo(AboutComponent);
