import styled, { css } from "styled-components";
import { TooltipWrapperStyleProps } from "./interface";

const getTooltipPlacement = ({ position }: TooltipWrapperStyleProps) => {
  switch (position) {
    case "top":
      return css`
        left: 50%;
        bottom: calc(100% + 8px);
        transform: translateX(-50%);
        justify-content: center;

        &::before {
          left: 50%;
          bottom: -4px;
          border-bottom-right-radius: 35%;
          transform: translateX(-50%) rotate(45deg) skew(-5deg, -5deg);
        }
      `;
    case "bottom":
      return css`
        left: 50%;
        top: calc(100% + 8px);
        transform: translateX(-50%);
        justify-content: center;

        &::before {
          left: 50%;
          top: -4px;
          border-top-left-radius: 35%;
          transform: translateX(-50%) rotate(45deg) skew(-5deg, -5deg);
        }
      `;
    case "topLeft":
      return css`
        left: 0;
        bottom: calc(100% + 8px);
        justify-content: flex-start;

        &::before {
          left: 16px;
          bottom: -4px;
          border-bottom-right-radius: 35%;
          transform: translateX(-50%) rotate(45deg) skew(-5deg, -5deg);
        }
      `;
    case "topRight":
      return css`
        right: 0;
        bottom: calc(100% + 8px);
        justify-content: flex-end;

        &::before {
          right: 16px;
          bottom: -4px;
          border-bottom-right-radius: 35%;
          transform: translateX(50%) rotate(45deg) skew(-5deg, -5deg);
        }
      `;
    case "bottomLeft":
      return css`
        left: 0;
        top: calc(100% + 8px);
        justify-content: flex-start;

        &::before {
          left: 16px;
          top: -4px;
          border-top-left-radius: 35%;
          transform: translateX(-50%) rotate(45deg) skew(-5deg, -5deg);
        }
      `;
    case "bottomRight":
      return css`
        right: 0;
        top: calc(100% + 8px);
        justify-content: flex-end;

        &::before {
          right: 16px;
          top: -4px;
          border-top-left-radius: 35%;
          transform: translateX(50%) rotate(45deg) skew(-5deg, -5deg);
        }
      `;
    case "left":
      return css`
        top: 50%;
        right: calc(100% + 8px);
        transform: translateY(-50%);
        justify-content: flex-end;

        &::before {
          top: 50%;
          right: -4px;
          border-top-right-radius: 35%;
          transform: translateY(-50%) rotate(45deg) skew(-5deg, -5deg);
        }
      `;
    case "right":
      return css`
        top: 50%;
        left: calc(100% + 8px);
        transform: translateY(-50%);
        justify-content: flex-start;

        &::before {
          top: 50%;
          left: -4px;
          border-bottom-left-radius: 35%;
          transform: translateY(-50%) rotate(45deg) skew(-5deg, -5deg);
        }
      `;
    default:
      return;
  }
};

const TooltipWrapperStyle = styled.div<TooltipWrapperStyleProps>`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 3px 5px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: ${({ theme }) => theme.borderRadiusS};
  box-shadow: 0 0 6px 2px rgba(#252526, 0.6);
  background-color: ${({ theme }) => theme.colors.sideBarBackground};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 11px;
  white-space: nowrap;
  z-index: 2;
  ${getTooltipPlacement}
`;

const ShortCutKeyStyle = styled.span`
  margin-left: 4px;
`;

export { TooltipWrapperStyle, ShortCutKeyStyle };
