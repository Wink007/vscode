import styled from "styled-components";

const PopupComponentWrapperStyle = styled.ul`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 5px;
  border: 1px solid #303031;
  border-radius: 4px;
  box-shadow: 0 0 6px 2px rgba(#252526, 0.6);
  background-color: #252526;
  transform: translateX(-50%);
  z-index: 2;
`;

export { PopupComponentWrapperStyle };
