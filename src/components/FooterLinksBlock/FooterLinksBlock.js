import { FooterTitle, WrapperFooterLinkBlock } from "./FooterLinksBlock.styled";

export const FooterLinksBlock = ({ title, mbtn, children }) => {
  return (
    <WrapperFooterLinkBlock title={title}>
      <FooterTitle mbtn={mbtn}>{title}</FooterTitle>
      {children}
    </WrapperFooterLinkBlock>
  );
};
