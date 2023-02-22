import styled from "styled-components";

export const BreadCrumbsWrapper = styled.div(
  ({ theme }) => `
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    padding: 0 16px;
    box-shadow: 0 8px 8px -5px #1d1d1d;
    background-color: ${theme.colors.background};
    color: #cccccccc;
    font-size: 13px;
  `
);
