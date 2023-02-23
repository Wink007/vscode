import { FunctionComponent, memo } from "react";
import { Header } from "./components/Header";
import Logo from "../../assets/images/vscode-bg.svg";
import {
  WelcomeComponentWrapperStyle,
  ShortCutStyle,
  ShortCutLabelStyle,
  KeyStyle,
  ContentStyle,
  ShortCutWrapperStyle,
} from "./style";

const WelcomeComponent: FunctionComponent = () => {
  return (
    <WelcomeComponentWrapperStyle>
      {/* <Header /> */}
      <ContentStyle>
        <img src={Logo} alt="" />
        <ShortCutWrapperStyle>
          <ShortCutStyle>
            <ShortCutLabelStyle>Show Settings</ShortCutLabelStyle>
            <KeyStyle>⌘</KeyStyle>
            <KeyStyle>,</KeyStyle>
          </ShortCutStyle>
          <ShortCutStyle>
            <ShortCutLabelStyle>Show theme settings</ShortCutLabelStyle>
            <KeyStyle>⌘</KeyStyle>
            <KeyStyle>E</KeyStyle>
          </ShortCutStyle>
          <ShortCutStyle>
            <ShortCutLabelStyle>Toggle Side Bar </ShortCutLabelStyle>
            <KeyStyle>⌘</KeyStyle>
            <KeyStyle>B</KeyStyle>
          </ShortCutStyle>
          <ShortCutStyle>
            <ShortCutLabelStyle>Toggle Panel</ShortCutLabelStyle>
            <KeyStyle>⌘</KeyStyle>
            <KeyStyle>J</KeyStyle>
          </ShortCutStyle>
        </ShortCutWrapperStyle>
      </ContentStyle>
    </WelcomeComponentWrapperStyle>
  );
};

export const Welcome = memo(WelcomeComponent);
