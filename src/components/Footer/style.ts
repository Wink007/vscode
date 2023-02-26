import styled from "styled-components";

const FooterComponentWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  padding: 0 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.blockBorderColor};
  background-color: ${({ theme }) => theme.colors.menuBarBackground};
`;

const LeftSideStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const IconStyle = styled.div`
  margin-right: 4px;
  font-size: 14px !important;
`;

const BranchContentStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;
  color: ${({ theme }) => theme.colors.primaryColor};
  line-height: 22px;
  font-size: 12px;
  cursor: pointer;

  & .bell {
    margin-left: 4px;
  }

  &:first-child {
    margin-right: 12px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.activeColor};
  }
`;

const ErrorsWrapperStyle = styled.div`
  position: relative;
  display: flex;

  ${BranchContentStyle} {
    &:first-child {
      margin-right: 0;
    }
  }
`;

const RightSideStyle = styled(LeftSideStyle)``;

export {
  FooterComponentWrapperStyle,
  LeftSideStyle,
  RightSideStyle,
  IconStyle,
  BranchContentStyle,
  ErrorsWrapperStyle,
};
