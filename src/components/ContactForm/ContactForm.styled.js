import styled from "styled-components";
import { Field, Form } from "formik";
import send_bg from "../../img/contact_sect/letter_send.png";
// import send_bg_desk from "../../img/contact_sect/send_bg_desk.png";

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
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

  &::after {
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

    @media screen and (min-width: 1440px) {
      width: 240px;
      height: 112px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: auto;
    padding-right: 0;
    padding-left: 0;
  }
`;

export const FormField = styled(Field)`
  display: block;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 12px;
  border: none;
  border-bottom: 2px solid #8d8d8d;
  font-family: "Poppins500";
  font-size: 14px;
  line-height: 1.43;
  color: #8d8d8d;
  margin-bottom: ${(props) => (props.name === "message" ? "26px" : "0")};

  @media screen and (min-width: 1440px) {
    margin-bottom: ${(props) => (props.name === "message" ? "46px" : "0")};
  }

  &:active,
  :hover,
  :focus {
    color: #000000;
    outline: 0;
    outline-offset: 0;
    border-bottom: 2px solid #000000;
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
  @media screen and (min-width: 1440px) {
    margin-bottom: 46px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-bottom: 64px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  width: 278px;
  height: 38px;
  background: #000000;
  box-shadow: 0px 0px 8.96px rgba(0, 0, 0, 0.12);
  border-radius: 3.2px;
  font-family: "Poppins500";
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    width: 214px;
    height: 54px;
    display: block;
    margin-left: auto;
    margin-bottom: 152px;
    font-size: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 5px;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.12);
  }
`;

export const InputWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 278px);
    grid-template-rows: repeat(2);
    grid-column-gap: 40px;
    grid-row-gap: 46px;
    margin-bottom: 46px;
  }
`;

export const FormArticle = styled.article``;
