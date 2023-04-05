import {
  FooterWrapper,
  FooterLogo,
  ListsWrap,
  ContentWrap,
  LogoWrapper,
} from "../Footer/Footer.styled";
import { FooterList } from "../FooterList/FooterList";
import { SubscriptionForm } from "../SubscriptionForm/SubscriptionForm";
import { company, legal, quickLinks } from "../../data/footerLinks";
import { contactsInfo } from "../../data/contactsInfo";
import { ContactsList } from "../ContactsList/ContactsList";
import { FooterListContainer } from "../FooterListContainer/FooterListContainer";

export const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <FooterLogo href="/">Logo Here</FooterLogo>
      </LogoWrapper>

      <ContentWrap>
        <ListsWrap>
          <FooterListContainer title="Reach us">
            <ContactsList content={contactsInfo} location="footer" />
          </FooterListContainer>
          <FooterList title="Company" content={company} />
          <FooterList title="Legal" content={legal} />
          <FooterList title="Quick Links" content={quickLinks} />
        </ListsWrap>

        <SubscriptionForm />
      </ContentWrap>
    </FooterWrapper>
  );
};
