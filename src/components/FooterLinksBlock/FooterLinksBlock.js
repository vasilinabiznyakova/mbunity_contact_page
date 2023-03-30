import { FooterTitle, WrapperFooterLinkBlock } from "./FooterLinksBlock.styled";

export const FooterLinksBlock = ({ title, mbtn, children }) => {
  return (
    <WrapperFooterLinkBlock>
      <FooterTitle mbtn={mbtn}>{title}</FooterTitle>
      {children}
    </WrapperFooterLinkBlock>
  );
};
