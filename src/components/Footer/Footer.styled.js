import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #000000;
  padding: 20px 20px 50px;
  &:first-child {
  
    @media screen and (min-width: 1440px) {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 1440px) {
    padding: 80px 80px 66px;
  }
`;

export const FooterLogo = styled.a`
  position: relative;
  text-decoration: none;
  display: block;
  margin-bottom: 50px;
  font-family: "Inter800";
  text-align: center;
  font-size: 36px;
  line-height: 1.22;
  color: #ffffff;

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 2px;
    width: 100%;
    background: white;
    transform: translateY(20px);
    @media screen and (min-width: 1440px) {
      transform: translateY(45px);
    }
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 75px;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 30px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 0;
     
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    &:last-child {
      margin-right: 110px;
    }
  }
`;

export const LinksContainer = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 0;
  }
`;

export const DeskTopContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
