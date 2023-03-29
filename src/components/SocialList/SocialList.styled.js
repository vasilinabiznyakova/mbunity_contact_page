import styled from "styled-components";

export const GeneralSocialList = styled.ul`
  display: flex;
  justify-content: center;
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
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #ffffff;
  }
`;

export const LogoWrapper = styled.div`
  &:hover,
  &:focus {
    stroke: #000000;
  }
`;
