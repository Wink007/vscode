import { useState, FunctionComponent, ReactNode } from "react";

import { CustomLayoutContext } from "./CustomLayoutContext";

interface CustomLayoutProviderProps {
  children: ReactNode;
}

export const CustomLayoutProvider: FunctionComponent<
  CustomLayoutProviderProps
> = ({ children }) => {
  const [isActivityBarOpened, setIsActivityBarOpened] = useState(true);
  const [isPrimarySideBarOpened, setIsPrimarySideBarOpened] = useState(true);
  const [isStatusBarOpened, setIsStatusBarOpened] = useState(true);
  const [layoutSideBarPosition, setLayoutSideBarPosition] = useState("left");

  return (
    <CustomLayoutContext.Provider
      value={{
        isActivityBarOpened,
        isPrimarySideBarOpened,
        isStatusBarOpened,
        layoutSideBarPosition,
        setIsActivityBarOpened,
        setIsPrimarySideBarOpened,
        setIsStatusBarOpened,
        setLayoutSideBarPosition,
      }}
    >
      {children}
    </CustomLayoutContext.Provider>
  );
};
