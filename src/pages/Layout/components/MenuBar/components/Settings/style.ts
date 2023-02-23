import styled, { css } from "styled-components";

const SettingsWrapperStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const SpanIcon = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 3px;
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    css`
      color: #fff;
    `}

  &:hover {
    color: #fff;
  }

  & .icon {
    font-size: 24px !important;
  }
`;

const IconStyle = styled.div`
  align-items: "center";
  justify-content: "center";
  width: "100%";
  height: "100%";
  display: "flex";
`;

export { SettingsWrapperStyle, SpanIcon, IconStyle };
