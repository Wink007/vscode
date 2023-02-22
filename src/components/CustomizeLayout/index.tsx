import { FunctionComponent, memo, useContext } from "react";
import { CUSTOMIZE_LAYOUT_DATA } from "./data";

import { ItemStyle } from "../style";
import {
  LabelIconStyle,
  FlexStyle,
  CurrentLabelStyle,
  HeadingStyle,
  SubTitleStyle,
} from "./style";
import { CustomLayoutContext } from "./CustomLayoutContext/CustomLayoutContext";

const CustomizeLayoutComponent: FunctionComponent = () => {
  const {
    isActivityBarOpened,
    isPrimarySideBarOpened,
    isStatusBarOpened,
    setIsActivityBarOpened,
    setIsPrimarySideBarOpened,
    setIsStatusBarOpened,
    setLayoutSideBarPosition,
  } = useContext(CustomLayoutContext);

  const getHandleContextTypeClick = (label: string) => {
    switch (label) {
      case "Activity Bar":
        return () => setIsActivityBarOpened(!isActivityBarOpened);
      case "Primary Side Bar":
        return () => setIsPrimarySideBarOpened(!isPrimarySideBarOpened);
      case "Status Bar":
        return () => setIsStatusBarOpened(!isStatusBarOpened);
      case "Left":
        return () => setLayoutSideBarPosition("left");
      case "Right":
        return () => setLayoutSideBarPosition("right");
    }
  };

  return (
    <>
      <HeadingStyle>Customize Layout</HeadingStyle>
      {CUSTOMIZE_LAYOUT_DATA.map(({ icon, label, subTitle, hasSeparator }) => {
        return (
          <div key={label}>
            <ItemStyle onClick={getHandleContextTypeClick(label)}>
              <FlexStyle>
                <LabelIconStyle className={`codicon codicon-${icon}`} />
                <CurrentLabelStyle>{label}</CurrentLabelStyle>
              </FlexStyle>
              <FlexStyle>
                {subTitle && <SubTitleStyle>{subTitle}</SubTitleStyle>}
              </FlexStyle>
            </ItemStyle>
            {hasSeparator && (
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#c5c5c5",
                }}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export const CustomizeLayout = memo(CustomizeLayoutComponent);
