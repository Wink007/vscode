import { FunctionComponent, memo } from "react";
import { HeaderPage } from "../../components/HeaderPage";

const SkillsComponent: FunctionComponent = () => {
  return <HeaderPage title="Skills Page" />;
};

export const Skills = memo(SkillsComponent);
