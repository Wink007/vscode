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

const ShortCutStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 13px 0;
`;

const ShortCutWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShortCutLabelStyle = styled.div`
  margin-right: 8px;
  font-size: 13px;
  text-align: left;
  margin: 0 13px 0 auto;
`;

const KeyStyle = styled.div`
  display: inline-block;
  margin: 0 2px;
  padding: 3px 5px;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: rgba(128, 128, 128, 0.17);
  color: #ccc;
  font-size: 11px;
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
  KeyStyle,
  ContentStyle,
  ShortCutWrapperStyle,
};
