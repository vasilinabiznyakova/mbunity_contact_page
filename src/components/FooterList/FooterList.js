import { IconWrapper, Link, ListItem } from "./FooterList.styled";

export const FooterList = ({ content, width, children, mark }) => {
  return (
    <ul>
      {content.map((el) => (
        <ListItem key={el.id}>
          <Link href={el.link}>
            {el.icon ? <IconWrapper> {el.icon}</IconWrapper> : null}
            <p>{el.description}</p>
          </Link>
        </ListItem>
      ))}
    </ul>
  );
};
