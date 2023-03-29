import { GeneralInquiryList } from "../GeneralInquiryList/GeneralInquiryList";
import { FooterWrapper } from "../Footer/Footer.styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>Logo Here</div>
      <div>
        <GeneralInquiryList />
      </div>
    </FooterWrapper>
  );
};
