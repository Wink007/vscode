import { FunctionComponent, memo } from "react";
import { useHover } from "../../../../hooks/useHover";
import { Tooltip } from "../../../Tooltip";

import { IconStyle, BranchContentStyle } from "../../style";

const NotificationsComponent: FunctionComponent = () => {
  const [isHovering, hoverProps] = useHover();
  return (
    <BranchContentStyle {...hoverProps}>
      <IconStyle className="bell codicon codicon-bell" />
      {isHovering && (
        <Tooltip position="topRight">
          <span>0 New Notifications</span>
        </Tooltip>
      )}
    </BranchContentStyle>
  );
};

export const Notifications = memo(NotificationsComponent);
