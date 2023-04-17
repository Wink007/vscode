import { FunctionComponent, memo } from "react";
import { HeaderPage } from "../../components/HeaderPage";
import { ContactsBlock } from "./components/ContactsBlock";

const ContactComponent: FunctionComponent = () => {
  return (
    <>
      <HeaderPage
        title="Contact Me."
        subtitle="Drop me a line, or give me heads up if you're interested in visiting me"
      />
      <ContactsBlock />
    </>
  );
};

export const Contact = memo(ContactComponent);
