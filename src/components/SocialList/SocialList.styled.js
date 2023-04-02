import styled from "styled-components";

export const GeneralSocialList = styled.ul`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    justify-content: normal;
  }
`;

export const GeneralSocialListItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const GeneralSocialListLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #262626;
  svg {
    fill: #ffffff;
  }
  transition: background-color, 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #ffffff;
    svg {
      transition: fill, 250ms cubic-bezier(0.4, 0, 0.2, 1);
      fill: #000000;
    }
  }
`;
