import { FunctionComponent, memo, ReactNode } from "react";

import { TooltipWrapperStyle, ShortCutKeyStyle } from "./style";

interface TooltipComponentProps {
  children: ReactNode;
  position?: string;
  shortCutKey?: string;
}

const TooltipComponent: FunctionComponent<TooltipComponentProps> = ({
  children,
  position,
  shortCutKey,
}) => {
  return (
    <TooltipWrapperStyle position={position}>
      {children}
      {shortCutKey && (
        <ShortCutKeyStyle>{`(⌘${shortCutKey})`}</ShortCutKeyStyle>
      )}
    </TooltipWrapperStyle>
  );
};

export const Tooltip = memo(TooltipComponent);
