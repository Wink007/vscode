import { FunctionComponent, memo } from "react";
import { useHover } from "../../../../hooks/useHover";
import { Tooltip } from "../../../Tooltip";

import { IconStyle, BranchContentStyle, ErrorsWrapperStyle } from "../../style";

const ErrorsComponent: FunctionComponent = () => {
  const [isHovering, hoverProps] = useHover();

  return (
    <ErrorsWrapperStyle {...hoverProps}>
      <BranchContentStyle>
        <IconStyle className="codicon codicon-error" />0
      </BranchContentStyle>
      <BranchContentStyle>
        <IconStyle className="codicon codicon-warning" />0
      </BranchContentStyle>
      {isHovering && (
        <Tooltip position="top">
          <span>Errors: 0, Infos: 0</span>
        </Tooltip>
      )}
    </ErrorsWrapperStyle>
  );
};

export const Errors = memo(ErrorsComponent);
