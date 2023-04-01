
import {
  Orange,
  HomeSubtitle,
  Subtitle,
  Wrapper,
  TextMessage,
  NavItem,
} from "./PagesPlug.styled";

// import { NavItem } from "../Navigation/Navigation.styled";


export const PagesPlug = () => {
  return (
    <Wrapper>
      <TextMessage>
        Dear Mentor! Here gonna be content of the current page
      </TextMessage>

      <NavItem to="/contact">Click for Contact Page!</NavItem>
      <HomeSubtitle>
        Your partner in <Orange>big ideas</Orange> and{" "}
        <Orange>big growth</Orange>
      </HomeSubtitle>
      <Subtitle>
        Mbunity Development provides{" "}
        <strong>custom software development</strong> and
        <strong>mobile application development</strong> for startups and
        enterprises across the globe.
      </Subtitle>
    </Wrapper>
  );
};
