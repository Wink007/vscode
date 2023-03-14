import { FunctionComponent, memo } from "react";
import { HeaderPage } from "../../components/HeaderPage";

const ContactComponent: FunctionComponent = () => {
  return (
    <HeaderPage
      title="Contact Me."
      subtitle="Drop me a line, or give me heads up if you're interested in visiting me"
    />
  );
};

export const Contact = memo(ContactComponent);
