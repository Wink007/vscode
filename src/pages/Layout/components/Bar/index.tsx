import { FunctionComponent, memo, useContext } from "react";
import { CustomLayoutContext } from "../../../../components/CustomizeLayout/CustomLayoutContext/CustomLayoutContext";
import { MenuBar } from "../MenuBar";
import { SideBar } from "../SideBar";

const BarComponent: FunctionComponent = () => {
  const { layoutSideBarPosition } = useContext(CustomLayoutContext);
  const isLeftPosition = layoutSideBarPosition === "left";

  return (
    <>
      {isLeftPosition && <MenuBar />}
      <SideBar />
      {!isLeftPosition && <MenuBar />}
    </>
  );
};

export const Bar = memo(BarComponent);
