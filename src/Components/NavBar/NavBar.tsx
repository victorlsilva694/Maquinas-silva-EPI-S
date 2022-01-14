import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import brand from "./img/maquinas silvas.png";
import * as S from "./style";
import { ProductsCategory } from "./ProductsCategory";
import { useContext } from "react";
import { CategoryContext } from "../../Contexts/CategoryContext";

const NavBar = () => {
  // ProductsCategory.map((products) => {
  //   console.log(products.name);
  // })

  const context = useContext(CategoryContext);

  function handleClick(newCategory: string) {
    context.handleFilter(newCategory);
  }
  return (
    <Navbar style={{ backgroundColor: "white" }} expand="lg">
      <Container
        style={{ padding: "10px", borderBottom: "1px solid rgb(230,230,230)" }}
      >
        <S.ContainerBrandAndText>
          <S.ContainerBrand>
            <img src={brand} alt="" />
          </S.ContainerBrand>

          <S.TextBrand>
            Máquinas silva & <br /> <strong>EPI'S</strong>
          </S.TextBrand>
        </S.ContainerBrandAndText>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav>
            <NavDropdown
              style={{ color: "black" }}
              title="Produtos"
              id="navbarScrollingDropdown"
            >
              {ProductsCategory.map((products) => {
                return (
                  <NavDropdown.Item onClick={() => handleClick(products.category)} style={{ color: "black" }} href="#action3">
                    {products.category}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{ color: "black" }}>
                Ver mais
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Quem Somos</Nav.Link>

            <Nav.Link href="#">Ajuda</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
