import styled from "styled-components";

const ContactsBlockWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-family: JetBrains;
  letter-spacing: 1px;
`;

const SocialStyle = styled.div`
  display: flex;
`;

const ItemStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0 8px 28px;
`;

const KeyStyle = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.contactTextKeyColor};
  white-space: nowrap;
`;

const ValueStyle = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.contactTextValueColor};
`;

const SeparatorStyle = styled.div`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.contactSeparatorColor};
`;

const BracketStyle = styled.div`
  color: ${({ theme }) => theme.colors.contactBracketsColor};
`;

const RowsStyle = styled.div`
  margin: 0 25px;

  & > p {
    display: flex;
    margin: 8px 0;
    font-weight: 100;

    &:first-child,
    &:last-child {
    }
  }
`;

const InfoStyle = styled.div`
  position: relative;
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.contactBracketsColor};

  &:after {
    content: "";
    position: absolute;
    top: 42px;
    left: 0;
    width: 1px;
    height: calc(100% - 84px);
    background-color: ${({ theme }) => theme.colors.blockBorderColor};
  }
`;

export {
  ContactsBlockWrapperStyle,
  SocialStyle,
  ItemStyle,
  KeyStyle,
  ValueStyle,
  SeparatorStyle,
  BracketStyle,
  RowsStyle,
  InfoStyle,
};
