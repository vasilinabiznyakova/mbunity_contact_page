import { FooterTitle, ListWrapper } from "./FooterListContainer.styled";

export const FooterListContainer = ({ title, children }) => {
  return (
    <ListWrapper title={title}>
      <FooterTitle title={title}>{title}</FooterTitle>
      {children}
    </ListWrapper>
  );
};
