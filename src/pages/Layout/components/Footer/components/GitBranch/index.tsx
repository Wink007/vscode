import { FunctionComponent, memo } from "react";
import { Tooltip } from "../../../../../../components/Tooltip";
import { useHover } from "../../../../../../hooks/useHover";
import { IconStyle, BranchContentStyle } from "../../style";

const GitBranchComponent: FunctionComponent = () => {
  const [isHovering, hoverProps] = useHover();

  return (
    <BranchContentStyle {...hoverProps}>
      <IconStyle className="codicon codicon-source-control" />
      master*
      {isHovering && (
        <Tooltip position="topLeft">
          <span>Alex Klievtsov (Git) - master*</span>
        </Tooltip>
      )}
    </BranchContentStyle>
  );
};

export const GitBranch = memo(GitBranchComponent);
