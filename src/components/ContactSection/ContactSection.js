import { GeneralInquiry } from "../GeneralInquiry/GeneralInquiry";
import {
  Section,
  MainTitle,
  MainTitleDescr,
} from "../ContactSection/ContactSection.styled";

export const ContactSection = () => {
  return (
    <Section>
      <MainTitle>Contact Us</MainTitle>
      <MainTitleDescr>
        Any question or remarks? Just write us a message!
      </MainTitleDescr>
      <GeneralInquiry />
    </Section>
  );
};
