import { FunctionComponent, memo } from "react";
import { shortCurtData } from "./components/Header/data";
import Logo from "../../assets/images/vscode-bg.svg";
import {
  WelcomeComponentWrapperStyle,
  ShortCutStyle,
  ShortCutLabelStyle,
  ContentStyle,
  ShortCutWrapperStyle,
  KeyStyleWrapperStyle,
} from "./style";
import { ShortCut } from "../../components/ShortCut";

const WelcomeComponent: FunctionComponent = () => {
  return (
    <WelcomeComponentWrapperStyle>
      <ContentStyle>
        <img src={Logo} alt="" />
        <ShortCutWrapperStyle>
          {shortCurtData.map(({ label, key }) => (
            <ShortCutStyle key={label}>
              <ShortCutLabelStyle>
                <span>{label}</span>
              </ShortCutLabelStyle>
              <KeyStyleWrapperStyle>
                <ShortCut shortCutLabel={key} />
              </KeyStyleWrapperStyle>
            </ShortCutStyle>
          ))}
        </ShortCutWrapperStyle>
      </ContentStyle>
    </WelcomeComponentWrapperStyle>
  );
};

export const Welcome = memo(WelcomeComponent);
