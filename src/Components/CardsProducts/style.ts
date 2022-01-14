import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 280px;
  margin: 30px;
  height: 460px;

  @media (max-width: 800px) {
    position: relative;
  }
`;

export const TitleContainer = styled.h1`
  font-size: max(1.8vw, 15px);
  text-align: left;
  font-family: "Open Sans";
`;

export const CardProduct = styled.div`
  width: 280px;
  position: relative;
  border: 1px solid rgb(235, 235, 235);
  box-shadow: 0px 8px 15px rgba(180, 180, 180);
  left: -50px;
  display: flex;
  justify-content: center;
  height: 380px;
  align-items: center;
  background-color: rgb(245, 245, 245);
  border-radius: 10px;

  @media (max-width: 800px) {
    left: -50px;
  }

  &:hover {
    box-shadow: 0px 15px 30px rgba(120, 120, 120);
    transition: 0.2s;
  }
`;

export const CategoryProduct = styled.h1`
  font-family: "IBM Plex Sans";
  color: rgb(50, 50, 50);
  margin-top: 20px;
  position: relative;
  left: -10%;
  text-align: center;
  font-size: max(1vw, 15px);
`;
