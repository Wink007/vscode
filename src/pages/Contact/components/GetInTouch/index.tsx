import { FunctionComponent, memo, useEffect, useState } from "react";
import {
  FormStyle,
  InputStyle,
  ButtonStyle,
  StatusStyle,
  TextAreaStyle,
} from "./style";

interface FormDetails {
  name: string;
  email: string;
  message: string;
}

interface ResponseData {
  status: string;
}

const GetInTouchComponent: FunctionComponent = () => {
  const [status, setStatus] = useState<string>("Submit");
  const [isSend, setIsSend] = useState<string>("");

  const [formValues, setFormValues] = useState<FormDetails>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("Sending...");

    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formValues),
    });

    setStatus("Submit");

    const result: ResponseData = await response.json();

    setIsSend(result.status);
  };

  useEffect(() => {
    if (!!isSend) {
      const timeoutId = setTimeout(() => setIsSend(""), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [isSend]);

  return (
    <FormStyle onSubmit={handleSubmit}>
      <InputStyle
        type="text"
        name="name"
        placeholder="Name"
        value={formValues.name}
        onChange={handleInputChange}
        required
      />
      <InputStyle
        type="email"
        name="email"
        placeholder="Email"
        value={formValues.email}
        onChange={handleInputChange}
        required
      />
      <TextAreaStyle
        placeholder="Message"
        name="message"
        value={formValues.message}
        onChange={handleInputChange}
        required
      />
      <ButtonStyle type="submit">{status}</ButtonStyle>
      {!!isSend && <StatusStyle>Message is sending</StatusStyle>}
    </FormStyle>
  );
};

export const GetInTouch = memo(GetInTouchComponent);
