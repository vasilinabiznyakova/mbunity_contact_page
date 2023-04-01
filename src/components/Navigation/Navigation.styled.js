import { NavLink } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../img/header/arrow.svg";
import arrow_desktop from "../../img/header/arrow_desktop.svg";
import { ReactComponent as Cart } from "../../img/header/cart.svg";

export const Nav = styled.nav`
  margin-top: 58px;
  height: 100vh;

  @media screen and (min-width: 1440px) {
    align-items: center;
    display: flex;
    height: auto;
    margin-top: 0;
  }
`;

export const MenuList = styled.ul`
  margin-bottom: 60px;

  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 0;
    margin-right: 60px;
  }
`;

export const MenuItem = styled.li`
  padding-left: 4px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 46px;
    }
  }
`;

export const NavItem = styled(NavLink)`
  font-family: "Roboto400";
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.1;
  color: #ffffff;
  &.active {
    font-family: "Roboto700";
  }

  svg {
    fill: #ffffff;
    @media screen and (min-width: 1440px) {
      fill: #000000;
    }
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.2;
    color: #1f1f1f;
    &.active {
      color: #000000;
    }
  }
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
  @media screen and (min-width: 1440px) {
    width: 76px;
    height: 20px;
    font-size: 16px;
    line-height: 1.2;
    color: #1f1f1f;
  }
`;

export const Option = styled.option`
  padding: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  @media screen and (min-width: 1440px) {
    padding-right: 8px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: 60px 50%;
    @media screen and (min-width: 1440px) {
      background-position: 70px;
      background-image: url(${arrow_desktop});
    }
  }
`;

export const UserIList = styled.ul`
  display: flex;
  margin: 0 112px;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

export const UserIListItem = styled.li`
  position: relative;
  width: 30px;
  height: 30px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  @media screen and (min-width: 1440px) {
    &:first-child {
      margin-right: 36px;
    }
    margin-right: 0;
    border-color: #000000;
  }
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

  @media screen and (min-width: 1440px) {
    /* stroke: #000000; */
  }
`;
