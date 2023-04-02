import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Cart } from "../../img/header/cart.svg";



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


export const UserIList = styled.ul`
  display: flex;
  justify-content: center;

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
  transition: background-color, 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:first-child {
    margin-right: 36px;
  }
  :hover,
  :focus {
    background-color: grey;
  }
  @media screen and (min-width: 1440px) {
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
`;
