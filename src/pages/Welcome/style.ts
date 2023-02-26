import styled from "styled-components";

const WelcomeComponentWrapperStyle = styled.div`
  position: relative;
  height: 100%;
  padding: 20px 40px;

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ContentStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);

  & > img {
    width: 290px;
    height: 290px;
    opacity: 0.4;
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
  border-radius: ${({ theme }) => theme.colors.borderRadiusM};

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

const ShortCutStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 13px;
  }
`;

const ShortCutWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 13px 0;
`;

const ShortCutLabelStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  margin-right: 8px;
  font-size: 13px;
  text-align: right;
`;

const KeyStyleWrapperStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 40%;
`;

export {
  WelcomeComponentWrapperStyle,
  HeaderComponentWrapperStyle,
  LogoStyle,
  TextContentStyle,
  ParagraphTitleStyle,
  ParagraphStyle,
  ShortCutStyle,
  ShortCutLabelStyle,
  ContentStyle,
  ShortCutWrapperStyle,
  KeyStyleWrapperStyle,
};
