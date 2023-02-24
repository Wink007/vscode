import { FunctionComponent, memo, useContext } from "react";
import { GitBranch } from "./components/GitBranch";
import { Notifications } from "./components/Notifications";
import { Errors } from "./components/Errors";
import { Prettier } from "./components/Prettier";
import { FileFormat } from "./components/FileFormat";
import {
  FooterComponentWrapperStyle,
  LeftSideStyle,
  RightSideStyle,
} from "./style";
import { CustomLayoutContext } from "../CustomizeLayout/CustomLayoutContext/CustomLayoutContext";

const FooterComponent: FunctionComponent = () => {
  const { isStatusBarOpened } = useContext(CustomLayoutContext);

  if (!isStatusBarOpened) {
    return null;
  }

  return (
    <FooterComponentWrapperStyle>
      <LeftSideStyle>
        <GitBranch />
        <Errors />
      </LeftSideStyle>
      <RightSideStyle>
        <FileFormat />
        <Prettier />
        <Notifications />
      </RightSideStyle>
    </FooterComponentWrapperStyle>
  );
};

export const Footer = memo(FooterComponent);
