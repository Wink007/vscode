import {
  memo,
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from "react";
import { CustomLayoutContext } from "../../../../../../components/CustomizeLayout/CustomLayoutContext/CustomLayoutContext";

import { Tooltip } from "../../../../../../components/Tooltip";
import { useHover } from "../../../../../../hooks/useHover";
import { ContentInside } from "./component/ContentInside";
import { SettingsWrapperStyle, SpanIcon, IconStyle } from "./style";

const SettingsComponent: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, hoverProps] = useHover();

  const { layoutSideBarPosition } = useContext(CustomLayoutContext);

  const isLeftPosition = layoutSideBarPosition === "left";
  const tooltipPosition = isLeftPosition ? "right" : "left";

  const handleSettingsClick = () => {
    setIsOpen(!isOpen);
  };

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
    <SettingsWrapperStyle {...hoverProps}>
      <SpanIcon isOpen={isOpen}>
        <IconStyle
          onClick={handleSettingsClick}
          className="icon codicon codicon-gear"
        />
        {isOpen && (
          <Tooltip position={tooltipPosition}>
            <ContentInside onClick={handleSettingsClick} />
          </Tooltip>
        )}
        {isHovering && !isOpen && (
          <Tooltip position={tooltipPosition}>
            <span>Manage</span>
          </Tooltip>
        )}
      </SpanIcon>
    </SettingsWrapperStyle>
  );
};

export const Settings = memo(SettingsComponent);
