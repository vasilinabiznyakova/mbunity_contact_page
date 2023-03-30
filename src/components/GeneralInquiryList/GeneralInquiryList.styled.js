import styled from "styled-components";
import { ReactComponent as Phone } from "../../img/contact_sect/phone_icon.svg";
import { ReactComponent as Email } from "../../img/contact_sect/email_icon.svg";
import { ReactComponent as Location } from "../../img/contact_sect/location.svg";

export const PhoneIcon = styled(Phone)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    margin-right: 26px;
    margin-left: 0;
    margin-bottom: 0;
  }
`;

export const EmailIcon = styled(Email)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    margin-right: 26px;
    margin-left: 0;
    margin-bottom: 0;
  }
`;

export const LocationIcon = styled(Location)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    margin-right: 26px;
    margin-left: 0;
    margin-bottom: 0;
  }
`;

export const InquiryDescr = styled.p`
  text-align: center;
  text-decoration: none;
  font-family: "Poppins400";
  font-size: 12px;
  line-height: 1.5;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    text-align: left;
    font-size: 16px;
  }
`;

export const InquiryLink = styled.a`
  text-decoration: none;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const List = styled.ul`
  margin-bottom: 58px;
`;

export const GeneralInquiryListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 50px;
    }
  }
`;
