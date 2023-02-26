import styled from "styled-components";

const MenuBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.menuBarBackground};
  border-right: 1px solid ${({ theme }) => theme.colors.blockBorderColor};
`;

export { MenuBarWrapper };
