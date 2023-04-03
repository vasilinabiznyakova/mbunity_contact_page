import { LinkEl, ListItem } from "./FooterList.styled";
import { FooterListContainer } from "../FooterListContainer/FooterListContainer";

export const FooterList = ({ content, title }) => {
  return (
    <FooterListContainer title={title}>
      <ul>
        {content.map((el) => (
          <ListItem key={el.id}>
            <LinkEl to={el.link}>
              <p>{el.description}</p>
            </LinkEl>
          </ListItem>
        ))}
      </ul>
    </FooterListContainer>
  );
};
