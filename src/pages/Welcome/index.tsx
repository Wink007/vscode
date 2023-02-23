import { FunctionComponent, memo } from "react";
import { Header } from "./components/Header";
import Logo from "../../assets/images/vscode-bg.svg";
import { WelcomeComponentWrapperStyle } from "./style";

const WelcomeComponent: FunctionComponent = () => {
  return (
    <WelcomeComponentWrapperStyle>
      <img src={Logo} alt="" />
      <Header />
      {/* <span>Visual Studio Code ... my personal portfolio</span>
      <span>
        Welcome to my portfolio page! My name is [name], and I am pleased to
        have you here.
      </span> */}
      <span>Show Settings - cmd + ,</span>
      <span>Show theme settings - cmd + e</span>
      <span>Toggle Side Bar - cmd + b</span>
      <span>Toggle Panel - cmd + j</span>
    </WelcomeComponentWrapperStyle>
  );
};

export const Welcome = memo(WelcomeComponent);
