import styled from "styled-components";
import el1 from "../../img/contact_sect/ellipse_big.svg";
import el2 from "../../img/contact_sect/ellipse_small.svg";


export const Article = styled.article`
  position: relative;
  background: #ffffff;

  box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
  border-radius: 5px;

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
`;

export const InquiryText = styled.p`
  margin-bottom: 12px;
  text-align: center;
  font-family: "Poppins400";
  font-size: 11px;
  line-height: 1.5;
  color: #c9c9c9;
`;

export const InquiryTitle = styled.h2`
  margin-bottom: 6px;
  text-align: center;
  font-family: "Poppins600";
  font-size: 20px;
  line-height: 1.5;
  color: #ffffff;
`;
