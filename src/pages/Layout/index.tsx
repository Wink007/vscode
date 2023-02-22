import { memo, FunctionComponent } from "react";

import { PopupContextWrapper } from "../../components/Popup/components";
import { CustomLayoutProvider } from "../../components/CustomizeLayout/CustomLayoutContext";
import { Content } from "./components/Content";

import { LayoutWrapperStyle } from "./style";

const LayoutComponent: FunctionComponent = () => {
  return (
    <LayoutWrapperStyle>
      <PopupContextWrapper>
        <CustomLayoutProvider>
          <Content />
        </CustomLayoutProvider>
      </PopupContextWrapper>
    </LayoutWrapperStyle>
  );
};

export const Layout = memo(LayoutComponent);
