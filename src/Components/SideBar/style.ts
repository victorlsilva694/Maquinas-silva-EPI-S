import styled from "styled-components";

export const ContainerSide = styled.div`
  width: 32%;
  height: 100vh;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ListCategories = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  position: relative;
  left: 20%;
`;

export const TitleCategories = styled.h1`
  font-size: max(1.8vw, 15px);
  text-align: left;
  font-family: "Open Sans";
`;

export const ListCategoriesLinks = styled.li`
  font-size: max(1.1vw, 15px);
  list-style: none;
  text-align: left;
  cursor: pointer;
  color: black;
  margin-top: 15px;
  font-family: "Open Sans";
`;
