import styled from "styled-components";

const HeaderPageWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 80px;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blockBorderColor};
`;

const TitleStyle = styled.div`
  margin-bottom: 12px;
  font-size: 32px;
  font-weight: 700;
`;

const SubtitleStyle = styled.div`
  font-size: 18px;
`;

export { HeaderPageWrapperStyle, TitleStyle, SubtitleStyle };
