import { NavLink } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../img/header/arrow.svg";
import { ReactComponent as Cart } from "../../img/header/cart.svg";

export const Nav = styled.nav`
  margin-top: 58px;
  height: 100vh;
`;

export const MenuList = styled.ul`
  margin-bottom: 60px;
`;

export const MenuItem = styled.li`
  padding-left: 4px;
  font-family: "Roboto400";
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  &:last-child {
    font-family: "Roboto700";
  }
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.1;
  color: #ffffff;
`;

export const Select = styled.select`
  cursor: pointer;
  width: 70px;
  height: 16px;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  font-family: "Roboto400";
  font-size: 14px;
  line-height: 1.1;
  background-color: inherit;
  color: #ffffff;
`;

export const Option = styled.option`
  padding: 0;
`;

export const Wrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    border-radius: 4px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: 60px 50%;
  }
`;

export const UserIList = styled.ul`
  display: flex;
  margin: 0 112px;
  justify-content: space-between;
`;

export const UserIListItem = styled.li`
  position: relative;
  width: 30px;
  height: 30px;
  border: 1px solid #ffffff;
  border-radius: 15px;
`;

export const UserImg = styled.img`
  width: 16px;
  height: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const CartLogo = styled(Cart)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;