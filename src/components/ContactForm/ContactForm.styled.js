import styled from "styled-components";
import { Field, Form } from "formik";
import send_bg from "../../img/contact_sect/letter_send.png";

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;

export const TextLabel = styled.span`
  font-family: "Poppins500";
  font-size: 12px;
  line-height: 1.7;
  color: ${(props) => (props.mark ? "#000000" : "#8D8D8D")};
`;

export const FormWrapper = styled(Form)`
  position: relative;
  width: 320px;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;

  &::before {
    content: "";
    bottom: 0;
    left: 62px;
    position: absolute;
    width: 104px;
    height: 56px;
    background-image: url(${send_bg});
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotate(-29deg);
  }
`;

export const FormField = styled(Field)`
  display: block;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 12px;
  border: none;
  border-bottom: 1px solid #8d8d8d;
  font-family: "Poppins500";
  font-size: 14px;
  line-height: 1.43;
  color: #8d8d8d;
  margin-bottom: ${(props) => (props.name === "message" ? "26px" : "0")};

  &:active,
  :hover,
  :focus {
    color: #000000;
    outline: 0;
    outline-offset: 0;
  }

  &::placeholder {
    font-family: "Poppins500";
    font-size: 14px;
    line-height: 1.43;
    color: #8d8d8d;
  }
`;

export const RadioTitle = styled.p`
  margin-bottom: 10px;
  font-family: "Poppins600";
  font-size: 14px;
  line-height: 1.43;
  color: #000000;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 26px;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-bottom: 64px;
  padding: 10px 92px;

  background: #000000;
  box-shadow: 0px 0px 8.96262px rgba(0, 0, 0, 0.12);
  border-radius: 3.2px;
  font-family: "Poppins500";
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;
`;
