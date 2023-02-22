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
  border-radius: 4px;
  color: #9e9f9f;

  &:hover {
    background-color: #06395d;
    color: #fff;
  }
`;

const LabelStyle = styled.div`
  padding-left: 26px;
`;

export { ContentInsideStyleWrapper, ItemStyle, LabelStyle };
