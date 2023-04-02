import { CustomDropDown } from "../CustomDropDown/CustomDropDown";
import { UserList } from "../UserList/UserList";
import { Nav, MenuList, MenuItem, NavItem, Wrapper } from "./Navigation.styled";

export const Navigation = ({ isDesktop }) => {
  return (
    <Nav>
      <MenuList>
        <MenuItem>
          <NavItem to="/">Home</NavItem>
        </MenuItem>
        <Wrapper>
          <CustomDropDown />
        </Wrapper>
        <MenuItem>
          <NavItem to="/blog">Blog</NavItem>
        </MenuItem>
        <MenuItem>
          <NavItem to="/shop">Shop</NavItem>
        </MenuItem>
        <MenuItem>
          <NavItem to="/about">About</NavItem>
        </MenuItem>
        <MenuItem>
          <NavItem to="/contact">Contact</NavItem>
        </MenuItem>
      </MenuList>
      <UserList isDesktop={isDesktop} />
    </Nav>
  );
};
