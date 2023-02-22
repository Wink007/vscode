import { useContext, memo } from "react";

import { PopupContext } from "../Popup/components/PopupContext";
import { ThemeContextParams } from "../../App/interface";
import { ThemePreferenceContext } from "../../App/ThemePreferenceContext";
import { ThemeData } from "./data";

import { ItemStyle, LabelStyle } from "../style";

const ThemeSettingsWrapper = () => {
  const { currentTheme, setCurrentThemeAndSavePref }: ThemeContextParams =
    useContext(ThemePreferenceContext);
  const { handlePopupToggle } = useContext(PopupContext);

  const handleChangeThemeClick = (str: string): void => {
    setCurrentThemeAndSavePref(str);
    handlePopupToggle();
  };

  return (
    <>
      <ItemStyle
        active={currentTheme === ThemeData.vscodeDefault}
        onClick={() => handleChangeThemeClick(ThemeData.vscodeDefault)}
      >
        <LabelStyle>Vs Code Default</LabelStyle>
      </ItemStyle>
      <ItemStyle
        active={currentTheme === ThemeData.vscodeWebstormDarcula}
        onClick={() => handleChangeThemeClick(ThemeData.vscodeWebstormDarcula)}
      >
        <LabelStyle>Vs Code WebStorm Darcula</LabelStyle>
      </ItemStyle>
    </>
  );
};

export const ThemeSettings = memo(ThemeSettingsWrapper);
