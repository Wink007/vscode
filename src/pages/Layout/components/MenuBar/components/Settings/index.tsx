import {
  memo,
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from "react";
import { CustomLayoutContext } from "../../../../../../components/CustomizeLayout/CustomLayoutContext/CustomLayoutContext";
import { PopupContext } from "../../../../../../components/Popup/components/PopupContext";

import { Tooltip } from "../../../../../../components/Tooltip";
import { ContentInside } from "./component/ContentInside";
import { SettingsWrapperStyle, SpanIcon, IconStyle } from "./style";

const SettingsComponent: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const { layoutSideBarPosition } = useContext(CustomLayoutContext);
  const { isPopupOpened } = useContext(PopupContext);

  const isLeftPosition = layoutSideBarPosition === "left";
  const tooltipPosition = isLeftPosition ? "right" : "left";

  const handleSettingsClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isPopupOpened) {
      setIsOpen(false);
      setIsHover(false);
    }
  }, [isPopupOpened]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <SettingsWrapperStyle
      onClick={handleSettingsClick}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <SpanIcon isOpen={isOpen}>
        <IconStyle className="icon codicon codicon-gear" />
        {isOpen && (
          <Tooltip position={tooltipPosition}>
            <ContentInside onClick={handleSettingsClick} />
          </Tooltip>
        )}
      </SpanIcon>
      {isHover && !isOpen && (
        <Tooltip position={tooltipPosition}>
          <span>Manage</span>
        </Tooltip>
      )}
    </SettingsWrapperStyle>
  );
};

export const Settings = memo(SettingsComponent);
