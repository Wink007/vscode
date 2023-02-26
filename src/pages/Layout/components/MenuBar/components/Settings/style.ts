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
  color: ${({ theme }) => theme.colors.primaryIconColor};
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    css`
      color: ${({ theme }) => theme.colors.activeColor};
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.activeColor};
  }

  & .icon {
    font-size: 24px !important;
  }
`;

export { SettingsWrapperStyle, SpanIcon };
