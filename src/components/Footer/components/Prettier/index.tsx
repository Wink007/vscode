import { FunctionComponent, memo } from "react";
import { IconStyle, BranchContentStyle } from "../../style";

const PrettierComponent: FunctionComponent = () => (
  <BranchContentStyle>
    <IconStyle className="codicon codicon-check-all" />
    Prettier
  </BranchContentStyle>
);

export const Prettier = memo(PrettierComponent);
