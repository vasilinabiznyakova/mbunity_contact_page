import styled from "styled-components";
import el1 from "../../img/contact_sect/ellipse_big.svg";
import el2 from "../../img/contact_sect/ellipse_small.svg";
import el1_desk from "../../img/contact_sect/ellipse_desk_big.svg";
import el2_desk from "../../img/contact_sect/ellipse_desk_small.svg";
import send_bg from "../../img/contact_sect/letter_send.png";
import send_bg_desk from "../../img/contact_sect/send_bg_desk.png";

export const Article = styled.article`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
  border-radius: 5px;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    display: flex;
    padding: 10px 50px 10px 10px;
    margin-left: auto;
    margin-right: auto;
  }

  &::after {
    content: "";
    position: absolute;
    left: calc(50% - 62px);
    bottom: 0;
    width: 104px;
    height: 56px;
    background-image: url(${send_bg});
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotate(-29deg);

    @media screen and (min-width: 1440px) {
      width: 240px;
      height: 112px;
      bottom: 14px;
      left: 797px;
      background-image: url(${send_bg_desk});
    }
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 15px;
  padding-bottom: 26px;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #000000;
  background-image: url(${el2}), url(${el1});
  background-repeat: no-repeat;
  background-position: right 26px bottom 52px, right bottom;

  @media screen and (min-width: 1440px) {
    width: 492px;
    margin-bottom: 0;
    margin-left: 0;
    padding-right: 114px;
    padding-left: 40px;
    margin-right: 50px;
    padding-top: 40px;
    padding-bottom: 36px;
    background-image: url(${el2_desk}), url(${el1_desk});
    background-position: right 70px bottom 70px, right bottom;
  }
`;

export const InquiryText = styled.p`
  margin-bottom: 12px;
  text-align: center;
  font-family: "Poppins400";
  font-size: 11px;
  line-height: 1.5;
  color: #c9c9c9;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    text-align: left;
    margin-bottom: 111px;
  }
`;

export const InquiryTitle = styled.h2`
  margin-bottom: 6px;
  text-align: center;
  font-family: "Poppins600";
  font-size: 20px;
  line-height: 1.5;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    text-align: left;
  }
`;
