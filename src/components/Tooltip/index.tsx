import { FunctionComponent, memo, ReactNode } from "react";
import { TooltipWrapperStyle } from "./style";

interface TooltipComponentProps {
  children: ReactNode;
  position?: string;
}

const TooltipComponent: FunctionComponent<TooltipComponentProps> = ({
  children,
  position,
}) => {
  return (
    <TooltipWrapperStyle position={position}>{children}</TooltipWrapperStyle>
  );
};

export const Tooltip = memo(TooltipComponent);
