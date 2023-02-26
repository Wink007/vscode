import styled, { css } from "styled-components";

const ItemStyle = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  color: #9e9f9f;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: #06395d;
      color: ${({ theme }) => theme.colors.activeColor};
    `}

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        background-color: #2b2d2e;
        /* color: ${({ theme }) => theme.colors.activeColor}; */
      }
    `}
`;

const LabelStyle = styled.div`
  padding-left: 12px;
  font-size: 11px;
`;

export { ItemStyle, LabelStyle };
