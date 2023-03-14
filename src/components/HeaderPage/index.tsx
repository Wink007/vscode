import { FunctionComponent, memo } from "react";
import { HeaderPageComponentProps } from "./interface";
import { HeaderPageWrapperStyle, TitleStyle, SubtitleStyle } from "./style";

const HeaderPageComponent: FunctionComponent<HeaderPageComponentProps> = ({
  title,
  subtitle,
}) => (
  <HeaderPageWrapperStyle>
    <TitleStyle>{title}</TitleStyle>
    <SubtitleStyle>{subtitle}</SubtitleStyle>
  </HeaderPageWrapperStyle>
);

export const HeaderPage = memo(HeaderPageComponent);
