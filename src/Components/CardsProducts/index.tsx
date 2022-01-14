import { Container, Row, Pagination } from "react-bootstrap";
import * as S from "./style";
import { allProducts } from "./Produtos";
import { useContext, useEffect } from "react";
import Paginate from "../Pagination/ItensPagination";
import { CategoryContext } from "../../Contexts/CategoryContext";


const CardsProducts = () => {

  const context = useContext(CategoryContext)

  console.log(context)

  return (
    <>
      <Container style={{ width: "70%", alignItems: "center" }}>
        <S.TitleContainer>Recomendados para você</S.TitleContainer>
        <Row
          style={{ display: "flex", alignItems: "center" }}
          className="d-flex justify-content-md-around align-center flex-column flex-md-row"
        >
          <Paginate limit={9}>
            {context.products.map((products, index) => {
              return (
                <S.ContainerCard key={index}>
                  <S.CardProduct>
                    <img
                      style={{ width: "200px" }}
                      src={products.imageProduct}
                      alt=""
                    />
                  </S.CardProduct>
                  <S.CategoryProduct>
                    {products.nameProduct} <br />
                    {products.descriptionProduct}
                  </S.CategoryProduct>
                </S.ContainerCard>
              );
            })}
          </Paginate>
        </Row>
      </Container>
    </>
  );
};

export default CardsProducts;
