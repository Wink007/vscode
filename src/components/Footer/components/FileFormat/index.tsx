import { FunctionComponent, memo } from "react";
import { useLocation } from "react-router-dom";
import { useHover } from "../../../../hooks/useHover";
import { PageNames } from "../../../../pages/enum";
import { Tooltip } from "../../../Tooltip";

import { currentFileFormat } from "../../data";
import { IconStyle, BranchContentStyle } from "../../style";

const FileFormatComponent: FunctionComponent = () => {
  const location = useLocation();
  const [isHovering, hoverProps] = useHover();
  const fileName = currentFileFormat[location.pathname];

  if (location.pathname === PageNames.welcome) {
    return null;
  }

  return (
    <BranchContentStyle {...hoverProps}>
      <IconStyle className="codicon codicon-symbol-namespace" />
      <span>{fileName}</span>
      {isHovering && (
        <Tooltip position="top">
          <span>Selected Language Mode</span>
        </Tooltip>
      )}
    </BranchContentStyle>
  );
};

export const FileFormat = memo(FileFormatComponent);
