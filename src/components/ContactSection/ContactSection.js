import {
  Section,
  MainTitle,
  MainTitleDescr,
} from "../ContactSection/ContactSection.styled";

import { GeneralInquiry } from "../GeneralInquiry/GeneralInquiry";

export const ContactSection = () => {
  return (
    <>
      <Section>
        <MainTitle>Contact Us</MainTitle>
        <MainTitleDescr>
          Any question or remarks? Just write us a message!
        </MainTitleDescr>
        <GeneralInquiry />
      </Section>
    </>
  );
};
