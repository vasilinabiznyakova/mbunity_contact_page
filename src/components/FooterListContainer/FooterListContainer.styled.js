import styled from "styled-components";

export const FooterTitle = styled.h2`
  margin-bottom: ${(props) => (props.title === "Reach us" ? "16px" : "20px")};
  font-family: "Poppins600";
  font-size: 16px;
  line-height: 1.62;
  color: #ffffff;
`;

export const ListWrapper = styled.div`
  width: ${(props) => props.title === "Reach us" && "143px"};
  margin-right: ${(props) => props.title === "Reach us" && "95px"};
  margin-bottom: ${(props) => props.title === "Reach us" && "30px"};
  margin-right: ${(props) => props.title === "Legal" && "118px"};

  @media screen and (min-width: 361px) {
    margin-right: ${(props) => props.title === "Reach us" && "48px"};
    margin-right: ${(props) => props.title === "Company" && "60px"};
    margin-right: ${(props) => props.title === "Legal" && "60px"};
    width: ${(props) => props.title === "Reach us" && "331px"};
  }
`;
