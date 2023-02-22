/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FunctionComponent, useContext, useRef, useEffect } from "react";
import { PopupContext } from "./components/PopupContext";

import { PopupComponentWrapperStyle } from "./style";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PopupData } from "./data";

const PopupComponent: FunctionComponent = () => {
  const popupType = useTypedSelector((state) => state.popup.popupType);
  const { isPopupOpened, handlePopupToggle } = useContext(PopupContext);

  const componentRef = useRef<HTMLUListElement>(null);
  const { Component } = PopupData[popupType];

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      componentRef.current &&
      !componentRef.current.contains(e.target as Node)
    ) {
      handlePopupToggle();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handlePopupToggle]);

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
      <Component />
    </PopupComponentWrapperStyle>
  );
};

export const Popup = memo(PopupComponent);
