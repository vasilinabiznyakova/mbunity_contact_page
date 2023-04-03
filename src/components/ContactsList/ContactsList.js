import { IconsGenerator } from "../IconsGenerator/IconsGenerator";
import { List, ListItem, Info, Link, Icon } from "./ContactsList.styled";

export const ContactsList = ({ content }) => {
  return (
    <List>
      {content.map((el) => (
        <ListItem key={el.id}>
          <Link href={el.link}>
            <Icon>
              <IconsGenerator id={el.icon} />
            </Icon>
            <Info>{el.description}</Info>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
