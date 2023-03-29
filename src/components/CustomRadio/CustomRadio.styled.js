import styled from "styled-components";
import { Field } from "formik";
import radio from "../../img/contact_sect/radio.svg";
import radio2 from "../../img/contact_sect/radiochecked.svg";

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "Poppins400";
  font-size: 12px;
  line-height: 1.67;
  color: #000000;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:before {
    content: "";
    display: inline-block;
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: auto;
    width: 13px;
    height: 13px;
    /* position: absolute; */

    left: 0;
    bottom: 0;
    background: url(${(props) => (props.selection ? radio2 : radio)});
  }
`;

export const RadioFiled = styled(Field)`
  cursor: pointer;
  margin-right: 10px;
  position: absolute;
  opacity: 0;
  background: url(${radio});
`;

export const DecorEl = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 13px;
  width: 13px;
  background-color: #e0e0e0;
  border-radius: 50%;
`;
