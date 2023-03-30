import { IconWrapper, List, Link, ListItem } from "./FooterList.styled";

export const FooterList = ({ content, width, children }) => {
  return (
    <List width={width}>
      {content.map((el) => (
        <ListItem key={el.id}>
          <Link href={el.link}>
            <IconWrapper> {el.icon}</IconWrapper>
            <p>{el.description}</p>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
