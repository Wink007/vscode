import styled, { css } from "styled-components";

const ItemStyle = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  color: #9e9f9f;
  font-size: 11px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: #06395d;
      color: #fff;
    `}

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        background-color: #2b2d2e;
      }
    `}
`;

const LabelStyle = styled.div`
  padding-left: 12px;
  font-size: 11px;
`;

export { ItemStyle, LabelStyle };
