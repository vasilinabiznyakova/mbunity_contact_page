import {
  Article,
  Wrapper,
  InquiryTitle,
  InquiryText,
} from "./GeneralInquiry.styled";

import { SocialList } from "../SocialList/SocialList";
import { GeneralInquiryList } from "../GeneralInquiryList/GeneralInquiryList";
import { ContactForm } from "../ContactForm/ContactForm";

export const GeneralInquiry = () => {
  return (
    <Article>
      <Wrapper>
        <InquiryTitle>Contact Information</InquiryTitle>
        <InquiryText>Say something to start a live chat!</InquiryText>
        <GeneralInquiryList />
        <SocialList />
      </Wrapper>
      <ContactForm />
    </Article>
  );
};
