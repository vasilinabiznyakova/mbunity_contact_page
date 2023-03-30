import { FooterTitle } from "./FooterLinksBlock.styled";

export const FooterLinksBlock = ({ title, mbtn, children }) => {
  return (
    <>
      <FooterTitle mbtn={mbtn}>{title}</FooterTitle>
      {children}
    </>
  );
};
