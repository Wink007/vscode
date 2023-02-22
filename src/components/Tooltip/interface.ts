import { HTMLAttributes } from "react";

interface TooltipStyleProps {
  position: string;
}

export interface TooltipWrapperStyleProps
  extends Partial<TooltipStyleProps>,
    HTMLAttributes<HTMLDivElement> {}
