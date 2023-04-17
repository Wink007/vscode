import { FunctionComponent, memo } from "react";
import { addPage } from "../../redux/addPages/actions";
import { useDispatch } from "react-redux";
import { BTN_TEXT, SUBTITLE_TEXT, TITLE_TEXT, WELCOME_TEXT } from "./data";
import { PageNames } from "../enum";
import {
  HomeWrapperStyle,
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
      <TitleStyle>{TITLE_TEXT}</TitleStyle>
      <TitleStyle>{SUBTITLE_TEXT}</TitleStyle>
      <SubtitleStyle>{WELCOME_TEXT}</SubtitleStyle>
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
