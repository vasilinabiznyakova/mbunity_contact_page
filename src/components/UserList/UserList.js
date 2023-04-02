import userLogo from "../../img/header/user_mob.png";
import userLogoDesktop from "../../img/header/user_desktop.png";

import {

  NavItem,
  UserIList,
  UserIListItem,
  UserImg,
  CartLogo,
} from "./UserList.styled";

export const UserList = ({ isDesktop }) => {
  return (
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
  );
};
