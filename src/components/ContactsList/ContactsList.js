import { IconsGenerator } from "../IconsGenerator/IconsGenerator";
import { List, ListItem, Info, Link, Icon } from "./ContactsList.styled";

export const ContactsList = ({ content, location }) => {
  return (
    <List location={location}>
      {content.map((el) => (
        <ListItem key={el.id} location={location}>
          <Link href={el.link}>
            <Icon location={location}>
              <IconsGenerator id={el.icon} />
            </Icon>
            <Info location={location}>{el.description}</Info>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
