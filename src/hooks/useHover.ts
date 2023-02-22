import { useState, HTMLProps } from "react";

type HoverProps = {
  hovering: boolean;
} & Pick<
  HTMLProps<HTMLDivElement | HTMLAnchorElement>,
  "onMouseOver" | "onMouseOut"
>;

export const useHover = (): [boolean, HoverProps] => {
  const [hovering, setHovering] = useState(false);

  const onMouseOver = () => setHovering(true);
  const onMouseOut = () => setHovering(false);

  const hoverProps: HoverProps = {
    hovering,
    onMouseOver,
    onMouseOut,
  };

  return [hovering, hoverProps];
};
