import styled from "styled-components";
import { NavLink } from "react-router-dom";
import arrow from "../../img/header/arrow.svg";
import arrow_desktop from "../../img/header/arrow_desktop.svg";

export const NavWraper = styled.div`
  position: ${(props) => (props.open ? "static" : "absolute")};
`;

export const DropdownTitle = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding-right: 20px;
  font-family: "Roboto400";
  text-decoration: none;
  font-size: 14px;
  line-height: 1.1;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    color: #1f1f1f;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-position: right;
    background-image: url(${arrow});
    background-repeat: no-repeat;

    @media screen and (min-width: 1440px) {
      background-image: url(${arrow_desktop});
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

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 6px;
  }
  a:hover {
    border-bottom: 2px solid #ffffff;

    @media screen and (min-width: 1440px) {
      border-bottom: 2px solid #000000;
    }
  }
`;

export const MenuList = styled.ul`
  margin-top: 10px;

  @media screen and (min-width: 1440px) {
    position: absolute;
  }
`;
