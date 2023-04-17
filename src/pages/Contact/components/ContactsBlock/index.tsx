import { FunctionComponent, memo } from "react";
import { contactsData } from "./data";
import {
  ContactsBlockWrapperStyle,
  SocialStyle,
  ItemStyle,
  KeyStyle,
  ValueStyle,
  SeparatorStyle,
  BracketStyle,
  RowsStyle,
  InfoStyle,
} from "./style";
import { GetInTouch } from "../GetInTouch";

const ContactsBlockComponent: FunctionComponent = () => {
  return (
    <ContactsBlockWrapperStyle>
      <SocialStyle>
        <RowsStyle>
          {Array.from(Array(8).keys()).map((_, key) => (
            <p key={key}>{key + 1}</p>
          ))}
        </RowsStyle>
        <InfoStyle>
          <KeyStyle>
            "contacts"
            <SeparatorStyle>:</SeparatorStyle>
            <BracketStyle>{"{"}</BracketStyle>
          </KeyStyle>
          {contactsData.map(({ keyLabel, valueLabel, hasLink }, key) => (
            <ItemStyle key={keyLabel}>
              <KeyStyle>
                <span>{keyLabel}</span>
                <SeparatorStyle>:</SeparatorStyle>
              </KeyStyle>
              <ValueStyle
                as={hasLink ? "a" : "div"}
                {...(hasLink && { href: valueLabel, target: "_blank" })}
              >
                {valueLabel.replace("https://", "")}
                {!(contactsData.length - 1 === key) && (
                  <SeparatorStyle>,</SeparatorStyle>
                )}
              </ValueStyle>
            </ItemStyle>
          ))}

          <BracketStyle>{"}"}</BracketStyle>
        </InfoStyle>
      </SocialStyle>
      <GetInTouch />
    </ContactsBlockWrapperStyle>
  );
};

export const ContactsBlock = memo(ContactsBlockComponent);
