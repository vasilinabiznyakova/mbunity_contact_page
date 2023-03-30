import styled from "styled-components";
export const IconWrapper = styled.span`
  display: block;
  margin-bottom: 14px;
`;

export const List = styled.ul`
  /* width: ${(props) => props.width}px; */
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: "Poppins400";
  font-size: 12px;
  line-height: 1.5;
  color: #ffffff;
`;
