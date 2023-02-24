import { memo, FunctionComponent } from "react";

import { ShortCutComponentProps } from "./interface";
import { ShortCutComponentWrapperStyle } from "./style";

const ShortCutComponent: FunctionComponent<ShortCutComponentProps> = ({
  shortCutLabel,
}) => (
  <ShortCutComponentWrapperStyle>{shortCutLabel}</ShortCutComponentWrapperStyle>
);

export const ShortCut = memo(ShortCutComponent);
