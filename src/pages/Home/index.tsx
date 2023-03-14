import { FunctionComponent, memo } from "react";
import { addPage } from "../../redux/addPages/actions";
import { useDispatch } from "react-redux";
import { BTN_TEXT, SUBTITLE_TEXT, TITLE_TEXT, WELCOME_TEXT } from "./data";
import { PageNames } from "../enum";
import {
  HomeWrapperStyle,
  WelcomeBtnStyle,
  TitleStyle,
  SubtitleStyle,
  ConnectButtonStyle,
} from "./style";

const HomeComponent: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleAddPage = (link: string) => {
    dispatch(addPage(link));
  };

  return (
    <HomeWrapperStyle>
      <WelcomeBtnStyle>{WELCOME_TEXT}</WelcomeBtnStyle>
      <TitleStyle>{TITLE_TEXT}</TitleStyle>
      <SubtitleStyle>{SUBTITLE_TEXT}</SubtitleStyle>
      <ConnectButtonStyle
        to={PageNames.contact}
        onClick={() => handleAddPage(PageNames.contact)}
      >
        {BTN_TEXT}
      </ConnectButtonStyle>
    </HomeWrapperStyle>
  );
};

export const Home = memo(HomeComponent);

//i love what i do
