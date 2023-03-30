import { FooterWrapper, FooterLogo } from "../Footer/Footer.styled";
import { FooterLinksBlock } from "../FooterLinksBlock/FooterLinksBlock";
import { FooterList } from "../FooterList/FooterList";
import { SubscriptionForm } from "../SubscriptionForm/SubscriptionForm";
import { company, legal, quickLinks, reachUs } from "../../data/footer";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo href="/">Logo Here</FooterLogo>
      <div>
        <FooterLinksBlock title="Reach us" mbtn="16">
          <FooterList content={reachUs} />
        </FooterLinksBlock>
        <FooterLinksBlock title="Company" mbtn="20">
          <FooterList content={company} />
        </FooterLinksBlock>
      </div>
      <div>
        <FooterLinksBlock title="Legal" mbtn="20">
          <FooterList content={legal} />
        </FooterLinksBlock>

        <FooterLinksBlock title="Quick Links" mbtn="20">
          <FooterList content={quickLinks} />
        </FooterLinksBlock>
      </div>
      <SubscriptionForm />
    </FooterWrapper>
  );
};