import styled from "styled-components";
import search from './img/search.png';
import bannerr from './img/christopher-burns-Wiu3w-99tNg-unsplash.jpg'

export const PageStatus = styled.div`
  width: 90%;
  height: 20vh;
  border: 1px solid black;
`;
export const StatusPage = styled.h1`
  font-family: "Open Sans";
  font-size: max(1vw, 10px);

  @media (max-width: 768px) {
    font-size: max(2vw, 10px);
  }

  span {
    color: rgb(80, 80, 230);
  }
`;
export const ContainerImage = styled.div`
  width: 80%;
  overflow: hidden;
  position: relative;
  left: 10%;
  border-radius: 10px;
  height: 60vh;

  @media(max-width: 800px){
    height: 30vh;
  }

  img{
     width: 100%;
  }
`;

export const ContainerPresentation = styled.div`
  width: 30%;
  height: 80px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    height: 80px;
  }
`;

export const SubTitle = styled.h1`
  font-family: "IBM Plex Sans";
  font-size: max(1.3vw, 10px);

  @media (max-width: 768px) {
    font-family: "IBM Plex Sans";
    font-size: max(2.4vw, 10px);
  }
`;

export const ContainerSearchProduct = styled.div`
  width: 40%;
  height: 80px;
  position: relative;

  @media (max-width: 780px) {
    width: 100%;
    height: 80px;
  }
  
  .formControlBorder{
    border-right: 0;
    height: 50px;
  }

  #basic-addon3{
    border-left: none;
    background-color: transparent;
  }

`;

