import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrapperStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  height: 100%;
`;

const WelcomeBtnStyle = styled.div`
  padding-left: 18px;
  color: #f55f8d;
  font-size: 22px;
  font-family: JetBrains, sans-serif;
  letter-spacing: 2px;
`;

const TitleStyle = styled.div`
  max-width: 900px;
  font-size: 60px;
  font-weight: 800;
  font-family: JetBrains, sans-serif;
  z-index: 1;

  &:first-child {
    color: #f55f8d;
  }
`;

const SubtitleStyle = styled.div`
  max-width: 800px;
  margin-top: 15px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  font-family: PoppinsRegular, sans-serif;
  z-index: 1;
`;

const ConnectButtonStyle = styled(Link)`
  margin: 80px 0;
  font-size: 32px;
  font-family: JetBrains, sans-serif;
  letter-spacing: 2px;
  z-index: 1;

  &:hover {
    color: #ffc15a;
  }
`;

export {
  HomeWrapperStyle,
  WelcomeBtnStyle,
  TitleStyle,
  SubtitleStyle,
  ConnectButtonStyle,
};
