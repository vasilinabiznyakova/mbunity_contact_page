import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeSubtitle = styled.p`

  font-family: "Inter800";
  margin-bottom: 20px;
  font-size: 31px;
  line-height: 42px;
  text-transform: uppercase;
  color: #252525;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    text-align: center;
    font-size: 70px;
    font-size: 31px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Inter800";
  color: #5f5f5f;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 38px;
  }
`;

export const Orange = styled.strong`
  color: #f93;
`;

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TextMessage = styled.p`
  font-family: "Inter800";
  text-align: center;
  margin-bottom: 40px;
`;

export const NavItem = styled(NavLink)`
  display: block;
  margin: 0 auto 40px;
  width: 300px;
  font-family: "Inter800";
  padding: 10px 10px;
  text-decoration: none;
  background: #f93;
  border-radius: 29px;
  text-align: center;
  font-size: 24px;
  color: #252525;
  line-height: 38px;

  :hover,
  :focus {
    background: green;
  }
`;
