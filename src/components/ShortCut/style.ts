import styled from "styled-components";

const ShortCutComponentWrapperStyle = styled.div`
  display: inline-block;
  margin: 0 2px;
  padding: 3px 5px;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.hoverButton};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 11px;
`;

export { ShortCutComponentWrapperStyle };
