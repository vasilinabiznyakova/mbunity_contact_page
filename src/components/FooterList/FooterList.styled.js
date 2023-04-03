import styled from "styled-components";
import { Link } from "react-router-dom";

export const IconWrapper = styled.span`
  display: block;
  margin-bottom: 14px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-right: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }
`;

export const LinkEl = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-family: "Poppins400";
  font-size: 12px;
  line-height: 1.5;
  color: #ffffff;
  :hover,
  :focus {
    border-bottom: 2px solid #ffffff;
  }


`;
