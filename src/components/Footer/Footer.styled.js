import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #000000;
  padding: 20px 20px 30px 20px;
  @media screen and (min-width: 1440px) {
    padding: 80px 80px 66px;
  }
`;
export const LogoWrapper = styled.div`
  position: relative;
  max-width: 360px;
  margin: 0 auto;
  text-align: center;
  display: block;
  margin-bottom: 50px;

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
    max-width: 1440px;
  }
`;

export const FooterLogo = styled.a`

  text-decoration: none;

  font-family: "Inter800";
  text-align: center;
  font-size: 36px;
  line-height: 1.22;
  color: #ffffff; 
`;

export const ContentWrap = styled.div`
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 20px;
  }
`;

export const ListsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
