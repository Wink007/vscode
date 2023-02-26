import styled from "styled-components";

const ContentInsideStyleWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 260px;
`;

const ItemStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: ${({ theme }) => theme.borderRadiusS};
  color: ${({ theme }) => theme.colors.primaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.focusedNavBackground};
    color: ${({ theme }) => theme.colors.activeColor};
  }
`;

const LabelStyle = styled.div`
  padding-left: 26px;
`;

export { ContentInsideStyleWrapper, ItemStyle, LabelStyle };
