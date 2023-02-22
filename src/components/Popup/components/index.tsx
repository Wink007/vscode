import { memo, FunctionComponent, useState } from "react";
import { PopupContext } from "./PopupContext";

import { PopupContextProps } from "./interface";

const PopupContextWrapperComponent: FunctionComponent<PopupContextProps> = ({
  children,
}) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const handlePopupToggle = (): void => {
    setIsPopupOpened(!isPopupOpened);
  };

  return (
    <PopupContext.Provider value={{ isPopupOpened, handlePopupToggle }}>
      {children}
    </PopupContext.Provider>
  );
};

export const PopupContextWrapper = memo(PopupContextWrapperComponent);
