import React, { useState, useEffect, memo } from "react";
import {
  CircleLoaderComponentStyle,
  CircleProgressStyle,
  CircleStyle,
  SvgStyle,
} from "./style";

interface Props {
  duration: number;
  finish: number;
  sizeProgress: number;
}

const CircleProgressComponent: React.FC<Props> = ({
  duration,
  finish,
  sizeProgress = 100,
}) => {
  const [displayedProgress, setDisplayedProgress] = useState<number>(0);

  useEffect(() => {
    const start = performance.now();
    const intervalId = setInterval(() => {
      const timeElapsed = performance.now() - start;
      const progress = timeElapsed / duration;
      const newDisplayedProgress = Math.min(finish, progress * finish);
      setDisplayedProgress(Math.round(newDisplayedProgress));

      if (newDisplayedProgress >= finish) {
        clearInterval(intervalId);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [duration, finish]);

  const r = 34;
  const c = Math.PI * (r * 2);
  const pct = ((100 - displayedProgress) / 100) * c;
  console.log("pct: ", pct);

  return (
    <CircleLoaderComponentStyle
      sizeProgress={sizeProgress}
      data-pct={displayedProgress}
    >
      <SvgStyle viewBox="0 0 74 74">
        <CircleStyle
          cx="37"
          cy="37"
          r="34"
          fill="none"
          strokeWidth="3"
          strokeDasharray="213.63"
          strokeDashoffset={0}
        />
        <CircleProgressStyle
          cx="37"
          cy="37"
          r="34"
          fill="none"
          strokeWidth="3"
          strokeDasharray="213.63"
          strokeDashoffset={pct}
        />
      </SvgStyle>
    </CircleLoaderComponentStyle>
  );
};

export const CircleProgress = memo(CircleProgressComponent);
