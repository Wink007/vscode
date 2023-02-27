import styled, { css } from "styled-components";

const ItemStyle = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px;
  border-radius: ${({ theme }) => theme.borderRadiusS};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 11px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      /* background-color: #06395d; */
      background-color: ${({ theme }) => theme.colors.activeLink};
      color: ${({ theme }) => theme.colors.activeColor};
    `}

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverNavBackground};
      }
    `}
`;

const LabelStyle = styled.div`
  padding-left: 12px;
  font-size: 11px;
`;

export { ItemStyle, LabelStyle };
