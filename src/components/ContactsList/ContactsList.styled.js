import styled from "styled-components";

export const List = styled.ul`
  margin-bottom: 58px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 50px;
    }
  }
`;

export const Info = styled.p`
  text-align: center;
  text-decoration: none;
  font-family: "Poppins400";
  font-size: 12px;
  line-height: 1.5;
  color: #ffffff;
  margin: 0 44px;

  @media screen and (min-width: 1440px) {
    text-align: left;
    font-size: 16px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.span`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    margin-right: 26px;
    margin-left: 0;
    margin-bottom: 0;
  }
`;
