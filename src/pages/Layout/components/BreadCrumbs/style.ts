import styled from "styled-components";

const BreadCrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  padding: 0 16px;
  box-shadow: 0 8px 8px -5px ${({ theme }) => theme.colors.boxShadow};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 13px;
`;

export { BreadCrumbsWrapper };
