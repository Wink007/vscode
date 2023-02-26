import styled from "styled-components";
import { LabelStyle } from "../style";

const FlexStyle = styled.div`
  display: flex;
  align-items: center;
`;

const LabelIconStyle = styled.div`
  margin: 0 4px 0 8px;
  font-size: 13px !important;
`;

const CurrentLabelStyle = styled(LabelStyle)`
  flex: 1;
  padding-left: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.activeColor};
  }
`;

const SubTitleStyle = styled.span`
  color: #5292f7;
`;

export { LabelIconStyle, CurrentLabelStyle, FlexStyle, SubTitleStyle };
