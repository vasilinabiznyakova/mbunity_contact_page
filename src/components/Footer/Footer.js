import {
  FooterWrapper,
  ContentWrapper,
  FooterLogo,
  FlexWrap,
  LinksContainer,
  WrapList,
  DeskTopContainer,
} from "../Footer/Footer.styled";
import { FooterLinksBlock } from "../FooterLinksBlock/FooterLinksBlock";
import { FooterList } from "../FooterList/FooterList";
import { SubscriptionForm } from "../SubscriptionForm/SubscriptionForm";
import { company, legal, quickLinks, reachUs } from "../../data/footer";

export const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <FooterLogo href="/">Logo Here</FooterLogo>
        <DeskTopContainer>
          <LinksContainer>
            <FlexWrap>
              <WrapList>
                <FooterLinksBlock title="Reach us" mbtn="16">
                  <FooterList content={reachUs} mark="reachUs" />
                </FooterLinksBlock>
              </WrapList>
              <WrapList>
                <FooterLinksBlock title="Company" mbtn="20">
                  <FooterList content={company} />
                </FooterLinksBlock>
              </WrapList>
            </FlexWrap>
            <FlexWrap>
              <WrapList title="legal">
                <FooterLinksBlock title="Legal" mbtn="20">
                  <FooterList content={legal} />
                </FooterLinksBlock>
              </WrapList>
              <WrapList>
                <FooterLinksBlock
                  title="Quick Links"
                  mark="quickLinks"
                  mbtn="20"
                >
                  <FooterList content={quickLinks} />
                </FooterLinksBlock>
              </WrapList>
            </FlexWrap>
          </LinksContainer>
          <SubscriptionForm />
        </DeskTopContainer>
      </ContentWrapper>
    </FooterWrapper>
  );
};
