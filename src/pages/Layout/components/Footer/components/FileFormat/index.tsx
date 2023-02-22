import { FunctionComponent, memo } from "react";
import { useLocation } from "react-router-dom";
import { Tooltip } from "../../../../../../components/Tooltip";
import { useHover } from "../../../../../../hooks/useHover";
import { currentFileFormat } from "../../data";
import { IconStyle, BranchContentStyle } from "../../style";

const FileFormatComponent: FunctionComponent = () => {
  const location = useLocation();
  const [isHovering, hoverProps] = useHover();
  const fileName = currentFileFormat[location.pathname];
  return (
    <BranchContentStyle {...hoverProps}>
      <IconStyle className="codicon codicon-symbol-namespace" />
      <span>{fileName}</span>
      {isHovering && (
        // eslint-disable-next-line react/jsx-no-undef
        <Tooltip position="top">
          <span>Selected Language Mode</span>
        </Tooltip>
      )}
    </BranchContentStyle>
  );
};

export const FileFormat = memo(FileFormatComponent);
