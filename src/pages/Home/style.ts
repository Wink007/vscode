import { Link } from "react-router-dom";
import styled from "styled-components";
import photo from "../../assets/images/photo.png";

const HomeWrapperStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  height: 100%;

  &:before {
    content: "";
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 750px;
    height: 950px;
    background: url(${photo}) no-repeat;
    background-size: 100%;
    opacity: 0.4;
  }
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
  margin: 20px 0;
  font-size: 60px;
  font-weight: 800;
  font-family: JetBrains, sans-serif;
`;

const SubtitleStyle = styled.div`
  max-width: 800px;
  margin-left: 15px;
  padding-left: 25px;
  border-left: 3px solid #ffc15a;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 2px;
  font-family: PoppinsRegular, sans-serif;
`;

const ConnectButtonStyle = styled(Link)`
  margin: 80px 0;
  font-size: 32px;
  font-family: JetBrains, sans-serif;
  letter-spacing: 2px;

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
