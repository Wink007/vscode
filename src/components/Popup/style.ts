import styled from "styled-components";

const PopupComponentWrapperStyle = styled.ul`
  position: absolute;
  top: 22px;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 5px;
  border: 1px solid #303031;
  border-radius: 4px;
  box-shadow: 0 0 6px 2px rgba(37, 37, 38, 0.8);
  background-color: #252526;
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
  background-color: #3b3b3c;
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
    border-radius: 4px;
    background-color: #363737;
  }
`;

export { PopupComponentWrapperStyle, HeadingStyle, CloseButtonStyle };
