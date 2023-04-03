import {
  Article,
  Wrapper,
  InquiryTitle,
  InquiryText,
} from "./GeneralInquiry.styled";

import { SocialList } from "../SocialList/SocialList";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactsList } from "../ContactsList/ContactsList";
import { contactsInfo } from "../../data/contactsInfo";

export const GeneralInquiry = () => {
  return (
    <Article>
      <Wrapper>
        <InquiryTitle>Contact Information</InquiryTitle>
        <InquiryText>Say something to start a live chat!</InquiryText>
        <ContactsList content={contactsInfo} />
        <SocialList />
      </Wrapper>
      <ContactForm />
    </Article>
  );
};
