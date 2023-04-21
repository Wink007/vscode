import styled from "styled-components";

const AboutContainerStyle = styled.div`
  display: flex;
  padding: 0 30px;
`;

const TitleStyle = styled.div`
  display: flex;
  margin: 0 30px 30px;
`;

const BlockStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 150px;
  margin: 0 30px 30px;
  padding: 30px;
  box-shadow: 0 8px 8px -5px ${({ theme }) => theme.colors.boxShadow};
  background-color: ${({ theme }) => theme.colors.menuBarBackground};

  &:after {
    content: "";
    position: absolute;
    top: 17px;
    right: -5px;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.menuBarBackground};
    transform: rotate(-135deg);
    border-top-right-radius: 50%;
  }

  &:before {
    content: "";
    background-color: ${({ theme }) => theme.colors.menuBarBackground};
    position: absolute;
    top: 14px;
    right: -49px;
    width: 13px;
    height: 13px;
    opacity: 1;
    border-radius: 50%;
    z-index: 1;
    opacity: 0.7;
    outline: solid 4px ${({ theme }) => theme.colors.customColor};
  }
`;

const InfoStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;

  &:before {
    content: "";
    position: absolute;
  }

  &:after {
    content: "";
    position: absolute;
    top: 62px;
    right: 0;
    height: calc(100% - 106px);
    width: 5px;
    background-color: ${({ theme }) => theme.colors.sideBarBackground};
  }
`;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameStyle = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 600;
`;

const PeriodStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.sideBarBackground};
  box-shadow: inset 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  font-family: monospace;
  font-size: 12px;
  font-weight: 800;
`;

const DegreeStyle = styled.div`
  display: flex;
  font-size: 14px;
  font-style: italic;
`;

const DividerStyle = styled.div`
  display: flex;
  width: 75%;
  height: 1px;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.customColor};
  z-index: 1;
`;

export {
  AboutContainerStyle,
  TitleStyle,
  BlockStyle,
  InfoStyle,
  HeaderStyle,
  NameStyle,
  PeriodStyle,
  DegreeStyle,
  DividerStyle,
};
