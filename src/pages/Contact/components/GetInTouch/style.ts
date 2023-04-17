import styled, { css } from "styled-components";

const FormStyle = styled.form`
  margin-top: 25px;
  padding: 0 30px;
  border-radius: 5px;
`;

const CommonStyle = css`
  width: 100%;
  height: 50px;
  margin-bottom: 25px;
  padding: 5px 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.hoverButton};
  color: ${({ theme }) => theme.colors.primaryColor};

  &:focus {
    border: none;
    outline: none;
  }
`;

const InputStyle = styled.input`
  ${CommonStyle}
`;

const TextAreaStyle = styled.textarea`
  ${CommonStyle}
  height: 130px;
`;

const ButtonStyle = styled.button`
  width: 200px;
  background-color: #ffc15a;
  color: #000;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:active,
  &:focus {
    background-color: #ffc15a;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:enabled {
    opacity: 1;
  }
`;

const StatusStyle = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;

export { FormStyle, InputStyle, ButtonStyle, StatusStyle, TextAreaStyle };
