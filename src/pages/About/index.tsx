import { FunctionComponent, memo } from "react";
import { HeaderPage } from "../../components/HeaderPage";
import { ABOUT_DATA } from "./data";
import {
  AboutContainerStyle,
  TitleStyle,
  BlockStyle,
  InfoStyle,
  HeaderStyle,
  NameStyle,
  PeriodStyle,
  DegreeStyle,
  DividerStyle,
} from "./style";
import { CircleProgress } from "../../components/CircleProgress";

const AboutComponent: FunctionComponent = () => {
  const { education, work } = ABOUT_DATA;
  return (
    <>
      <HeaderPage title="About Page" />
      <CircleProgress duration={1000} finish={90} sizeProgress={70} />
      <AboutContainerStyle>
        <InfoStyle>
          <TitleStyle>Education</TitleStyle>
          {education.map((item) => (
            <BlockStyle key={item.name}>
              <HeaderStyle>
                <NameStyle>{item.name}</NameStyle>
                <PeriodStyle>{item.date}</PeriodStyle>
              </HeaderStyle>
              <DegreeStyle>{item.degree}</DegreeStyle>
              <DividerStyle />
            </BlockStyle>
          ))}
        </InfoStyle>
        <InfoStyle>
          <TitleStyle>Work</TitleStyle>
          {work.map((item) => (
            <BlockStyle key={item.name}>
              <HeaderStyle>
                <NameStyle>{item.name}</NameStyle>
                <PeriodStyle>{item.date}</PeriodStyle>
              </HeaderStyle>
              <DegreeStyle>{item.degree}</DegreeStyle>
              <DividerStyle />
            </BlockStyle>
          ))}
        </InfoStyle>
      </AboutContainerStyle>
    </>
  );
};

export const About = memo(AboutComponent);
