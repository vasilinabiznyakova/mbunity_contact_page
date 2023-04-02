import userLogo from "../../img/header/user_mob.png";
import userLogoDesktop from "../../img/header/user_desktop.png";

import {
  Nav,
  MenuList,
  MenuItem,
  NavItem,
  Select,
  Option,
  Wrapper,
  UserIList,
  UserIListItem,
  UserImg,
  CartLogo,
} from "./Navigation.styled";

export const Navigation = ({ isDesktop }) => {
  return (
    <Nav>
      <MenuList>
        <MenuItem>
          <NavItem to="/">Home</NavItem>
        </MenuItem>
        <MenuItem>
          <Wrapper>
            <Select name="features" placeholder="Features">
              <Option value="0">Features</Option>
            </Select>
          </Wrapper>
        </MenuItem>
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

      <UserIList>
        <UserIListItem>
          <NavItem to="/user">
            <UserImg
              src={isDesktop ? userLogoDesktop : userLogo}
              alt="user logo"
            />
          </NavItem>
        </UserIListItem>
        <UserIListItem>
          <NavItem to="/cart">
            <CartLogo />
          </NavItem>
        </UserIListItem>
      </UserIList>
    </Nav>
  );
};
