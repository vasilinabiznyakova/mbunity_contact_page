import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  margin-top: 58px;

  @media screen and (min-width: 1440px) {
    align-items: center;
    display: flex;
    height: auto;
    margin-top: 0;
  }
`;

export const MenuList = styled.ul`
  margin-bottom: 60px;
  border-bottom: none;

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
  a:hover {
    border-bottom: 2px solid #ffffff;

    @media screen and (min-width: 1440px) {
      border-bottom: 2px solid #000000;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 46px;
    }

    a:hover {
      border-bottom: 2px solid #000000;
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

export const Wrapper = styled.li`
  position: relative;
  margin-bottom: 30px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-right: 46px;
  }
`;
