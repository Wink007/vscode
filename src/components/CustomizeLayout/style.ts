import styled from "styled-components";
import { LabelStyle } from "../style";

const HeadingStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  margin: -6px -6px 4px -6px;
  background-color: #3b3b3c;
  font-size: 11px;
`;

const FlexStyle = styled.div`
  display: flex;
  align-items: center;
  color: #c5c5c5;
`;

const LabelIconStyle = styled.div`
  margin: 0 4px 0 8px;
  font-size: 13px !important;
`;

const CurrentLabelStyle = styled(LabelStyle)`
  flex: 1;
  padding-left: 0;

  &:hover {
    color: #fff;
  }
`;

const SubTitleStyle = styled.span`
  color: #5292f7;
`;

export {
  HeadingStyle,
  LabelIconStyle,
  CurrentLabelStyle,
  FlexStyle,
  SubTitleStyle,
};
