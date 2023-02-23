import { FunctionComponent, memo } from "react";

import Logo from "../../../../assets/images/vscode.png";
import {
  HeaderComponentWrapperStyle,
  LogoStyle,
  TextContentStyle,
  ParagraphTitleStyle,
  ParagraphStyle,
} from "../../style";

const HeaderComponent: FunctionComponent = () => {
  return (
    <HeaderComponentWrapperStyle>
      <LogoStyle>
        <img src={Logo} alt="" />
      </LogoStyle>
      <TextContentStyle>
        <ParagraphTitleStyle>Visual Studio Code</ParagraphTitleStyle>
        <ParagraphStyle>my personal portfolio</ParagraphStyle>
      </TextContentStyle>
    </HeaderComponentWrapperStyle>
  );
};

export const Header = memo(HeaderComponent);
