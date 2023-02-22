import styled from "styled-components";

const HeaderPanelWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.colors.menuBarBackground};

  & .dots {
    display: flex;

    & .dot {
      width: 13px;
      height: 13px;
      border: 1px solid #d29b3a;
      border-radius: 50%;
      background-color: #f4bf4f;
      cursor: pointer;

      &:first-child {
        border: 1px solid #cb483e;
        background-color: #ec6a5e;
      }

      &:last-child {
        border: 1px solid #4ba03d;
        background-color: #61c555;
      }

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  & .path {
    color: #fff;
    font-size: 13px;
  }
`;

const ButtonsPanelStyle = styled.div`
  display: flex;
`;

const ButtonToggleSidebarStyle = styled.div`
  position: relative;
  display: flex;
  margin-left: 4px;
  padding: 2px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #363737;
  }
`;

const ToggleButtonsContentStyle = styled.div`
  display: flex;
`;

export {
  HeaderPanelWrapperStyle,
  ButtonToggleSidebarStyle,
  ButtonsPanelStyle,
  ToggleButtonsContentStyle,
};
