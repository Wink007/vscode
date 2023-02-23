import styled from "styled-components";

const WelcomeComponentWrapperStyle = styled.div`
  position: relative;
  /* display: flex; */
  height: 100%;
  padding: 20px 40px;

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 290px;
    height: 290px;
    opacity: 0.2;
  }
`;

const HeaderComponentWrapperStyle = styled.div`
  display: flex;
  align-items: center;
`;

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: ${({ theme }) => theme.colors.sideBarBackground};
  border-radius: 8px;

  & > img {
    width: 100px;
    height: 100px;
  }
`;

const TextContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 28px;
`;

const ParagraphTitleStyle = styled.div`
  font-size: 48px;
`;
const ParagraphStyle = styled.div`
  font-size: 32px;
`;

export {
  WelcomeComponentWrapperStyle,
  HeaderComponentWrapperStyle,
  LogoStyle,
  TextContentStyle,
  ParagraphTitleStyle,
  ParagraphStyle,
};
