/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FunctionComponent, useContext, useRef, useEffect } from "react";
import { PopupContext } from "./components/PopupContext";

import { PopupComponentWrapperStyle } from "./style";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PopupData } from "./data";
import { HeadingStyle, CloseButtonStyle } from "./style";

const PopupComponent: FunctionComponent = () => {
  const popupType = useTypedSelector((state) => state.popup.popupType);
  const { isPopupOpened, handlePopupToggle } = useContext(PopupContext);

  const componentRef = useRef<HTMLUListElement>(null);
  const { Component } = PopupData[popupType];
  const popupHeadingName =
    popupType === "theme" ? "Color Theme" : "Customize Layout";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isPopupOpened && event.key === "Escape") {
        handlePopupToggle();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPopupOpened]);

  if (!isPopupOpened || !popupType) {
    return null;
  }

  return (
    <PopupComponentWrapperStyle ref={componentRef}>
      <HeadingStyle>
        {popupHeadingName}
        <CloseButtonStyle title="Close" onClick={handlePopupToggle}>
          <span className="codicon codicon-close"></span>
        </CloseButtonStyle>
      </HeadingStyle>
      <Component />
    </PopupComponentWrapperStyle>
  );
};

export const Popup = memo(PopupComponent);
