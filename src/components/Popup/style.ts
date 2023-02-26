import styled from "styled-components";

const PopupComponentWrapperStyle = styled.ul`
  position: absolute;
  top: 22px;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.blockBorderColor};
  border-radius: ${({ theme }) => theme.borderRadiusS};
  box-shadow: 0 0 6px 2px ${({ theme }) => theme.colors.boxShadow};
  background-color: ${({ theme }) => theme.colors.sideBarBackground};
  transform: translateX(-50%);
  z-index: 2;
  overflow: hidden;
`;

const HeadingStyle = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  margin: -6px -6px 4px -6px;
  /* background-color: ${({ theme }) => theme.colors.activeItemColor}; */
  background-color: ${({ theme }) => theme.colors.tooltipHeadingBackground};
  font-size: 11px;
  text-align: center;
`;

const CloseButtonStyle = styled.div`
  position: absolute;
  top: 50%;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 2px;
  transform: translateY(-50%);
  font-size: 13px !important;
  cursor: pointer;

  &:hover {
    border-radius: ${({ theme }) => theme.borderRadiusS};
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }
`;

export { PopupComponentWrapperStyle, HeadingStyle, CloseButtonStyle };
