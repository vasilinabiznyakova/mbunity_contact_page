import styled from "styled-components";
import { Field, Form } from "formik";

export const FormTitle = styled.b`
  display: block;
  margin-bottom: 24px;
  font-family: "Poppins600";
  font-size: 16px;
  line-height: 1.62;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    margin-bottom: 29px;
  }
`;

export const FormField = styled(Field)`
  width: 172px;
  border: none;
  border-radius: 4px;
  padding: 10px 0 10px 10px;
  background: #1a1a1a;
  font-family: "Poppins400";
  font-size: 11px;
  line-height: 1.5;
  color: #616161;

  &:active,
  :hover,
  :focus {
    background: none;
    outline: 0;
    outline-offset: 0;
  }

  &::placeholder {
    font-family: "Poppins500";
    font-size: 11px;
    line-height: 1.5;
    color: #8d8d8d;
  }

  @media screen and (min-width: 1440px) {
    width: 172px;
  }
`;

export const FormWrapper = styled(Form)`
  padding: 16px 28px 14px 14px;
  background: #0d0d0d;
  border-radius: 5px;
  @media screen and (min-width: 1440px) {
    padding: 14px 12px 20px 14px;
    width: 304px;
    height: 184px;
  }
`;

export const SubscrBtn = styled.button`
  cursor: pointer;
  padding: 10px 22px;
  border: none;
  width: 105px;
  height: 39px;
  background: #000000;
  font-family: "Poppins500";
  font-size: 12px;
  line-height: 1.5;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    width: 105px;
  }
`;

export const SubsrInfo = styled.p`
  margin-top: 20px;
  font-family: "Manrope500";
  font-size: 13px;
  line-height: 1, 4;
  color: #ffffff;
  opacity: 0.5;
`;
