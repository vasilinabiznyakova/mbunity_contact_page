import {
  FooterWrapper,
  FooterLogo,
  FlexWrap,
  LinksContainer,
  DeskTopContainer,
} from "../Footer/Footer.styled";
import { FooterLinksBlock } from "../FooterLinksBlock/FooterLinksBlock";
import { FooterList } from "../FooterList/FooterList";
import { SubscriptionForm } from "../SubscriptionForm/SubscriptionForm";
import { company, legal, quickLinks, reachUs } from "../../data/footer";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo href="/">Logo Here</FooterLogo>
      <DeskTopContainer>
        <LinksContainer>
          <FlexWrap>
            <FooterLinksBlock title="Reach us" mbtn="16">
              <FooterList content={reachUs} mark="reachUs" />
            </FooterLinksBlock>
            <FooterLinksBlock title="Company" mbtn="20">
              <FooterList content={company} />
            </FooterLinksBlock>
          </FlexWrap>
          <FlexWrap>
            <FooterLinksBlock title="Legal" mbtn="20">
              <FooterList content={legal} />
            </FooterLinksBlock>

            <FooterLinksBlock title="Quick Links" mark="quickLinks" mbtn="20">
              <FooterList content={quickLinks} />
            </FooterLinksBlock>
          </FlexWrap>
        </LinksContainer>
        <SubscriptionForm />
      </DeskTopContainer>
    </FooterWrapper>
  );
};
