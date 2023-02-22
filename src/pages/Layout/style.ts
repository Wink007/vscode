import styled from "styled-components";

const LayoutWrapperStyle = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const MainWrapperStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentStyle = styled.div`
  display: flex;
  flex: 1;
`;

export { LayoutWrapperStyle, MainWrapperStyle, ContentStyle };
