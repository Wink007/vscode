import { memo, FunctionComponent, useContext } from "react";
import { CustomLayoutContext } from "../../../../../../components/CustomizeLayout/CustomLayoutContext/CustomLayoutContext";
import { Tooltip } from "../../../../../../components/Tooltip";
import { useHover } from "../../../../../../hooks/useHover";
import { ListItemProps } from "./interface";
import { ListItemWrapperStyle, SpanIcon, ActiveLineStyle } from "./style";

const ListItemComponent: FunctionComponent<ListItemProps> = ({
  icon,
  link,
  onClick,
  localeKey,
}) => {
  const [isHovering, hoverProps] = useHover();
  const { layoutSideBarPosition } = useContext(CustomLayoutContext);
  const isLeftPosition = layoutSideBarPosition === "left";
  const tooltipPosition = isLeftPosition ? "right" : "left";

  return (
    <ListItemWrapperStyle
      to={link}
      onClick={onClick}
      onMouseOver={hoverProps.onMouseOver}
      onMouseOut={hoverProps.onMouseOut}
    >
      <ActiveLineStyle isLeftPosition={isLeftPosition} />
      <SpanIcon className={`codicon codicon-${icon}`} />
      {isHovering && (
        <Tooltip position={tooltipPosition}>
          <span>{localeKey}</span>
        </Tooltip>
      )}
    </ListItemWrapperStyle>
  );
};

export const ListItem = memo(ListItemComponent);
