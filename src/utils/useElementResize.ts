import { useState, MouseEvent, RefObject } from "react";

export const useElementResize = (
  element: RefObject<HTMLDivElement>,
  isLeftPosition: boolean
) => {
  const [initialPos, setInitialPos] = useState<number | null>(null);
  const [initialSize, setInitialSize] = useState<number | null>(null);
  const [width, setWidth] = useState<number>(300);

  const initial = (e: MouseEvent) => {
    let resizable = element.current;
    if (element && element.current && resizable) {
      setInitialPos(e.clientX);
      setInitialSize(resizable.offsetWidth);
    }
  };

  const resize = (e: MouseEvent) => {
    let resizable = element.current;

    if (
      element.current &&
      resizable &&
      initialSize &&
      initialPos &&
      isLeftPosition
    ) {
      resizable.style.width = `${
        Number(initialSize) + Number(e.clientX - initialPos)
      }px`;
      setWidth(Number(initialSize) + Number(e.clientX - initialPos));
    }

    if (
      element.current &&
      resizable &&
      initialSize &&
      initialPos &&
      !isLeftPosition
    ) {
      resizable.style.width = `${
        Number(initialSize) - Number(e.clientX - initialPos)
      }px`;
      setWidth(Number(initialSize) + Number(e.clientX - initialPos));
    }
  };

  return {
    initial,
    resize,
    width,
  };
};
