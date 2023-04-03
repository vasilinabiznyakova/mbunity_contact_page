import { IconWrapper, LinkEl, ListItem } from "./FooterList.styled";

export const FooterList = ({ content, width, children, mark }) => {
  return (
    <ul>
      {content.map((el) => (
        <ListItem key={el.id}>
          <LinkEl>
            {el.icon ? <IconWrapper> {el.icon}</IconWrapper> : null}
            <p>{el.description}</p>
          </LinkEl>
        </ListItem>
      ))}
    </ul>
  );
};
