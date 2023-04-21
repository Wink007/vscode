import styled from "styled-components";

interface Test {
  sizeProgress: number;
}

const quiet = "#848ea1";
const g09 = "#000";

const CircleLoaderComponentStyle = styled.div<Test>`
  display: inline-block;
  position: relative;
  width: ${({ sizeProgress }) => sizeProgress}px;
  height: ${({ sizeProgress }) => sizeProgress}px;

  &:after {
    content: attr(data-pct) "%";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ sizeProgress }) => sizeProgress}px;
    text-align: center;
    color: ${quiet};
    font-size: 16px;
  }
`;

const SvgStyle = styled.svg`
  transform: rotate(-90deg);
`;

const CircleStyle = styled.circle`
  stroke-linecap: round;
  stroke: ${({ theme }) => theme.colors.headerPanelBackground};
`;

const CircleProgressStyle = styled.circle`
  stroke-linecap: round;
  stroke: ${({ theme }) => theme.colors.customColor};
  transition: stroke-dashoffset 0.1s ease-out;
`;

const CircleTextStyle = styled.text`
  font-size: 14px;
  font-weight: bold;
`;

export {
  CircleLoaderComponentStyle,
  SvgStyle,
  CircleStyle,
  CircleProgressStyle,
  CircleTextStyle,
};
