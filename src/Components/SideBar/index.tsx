import * as S from "./style";
import { sideLinks, navStyle } from "./LinksSidebar";
import { allProducts } from "../CardsProducts/Produtos";
import { useContext } from "react";
import { CategoryContext } from "../../Contexts/CategoryContext";

function handleClick(category: string) {
  var products = allProducts.filter((product: any) => {
    return product.nameProduct === category;
  });

  console.log(products);
}

const SideBarNavigate = () => {
  const context = useContext(CategoryContext);

  function handleClick(newCategory: string) {
    context.handleFilter(newCategory);
  }

  function handleClickGroup(newGroup: string){
    context.handleFilterGroup(newGroup);
  }

  return (
    <S.ContainerSide>
      <S.ListCategories>
        <S.TitleCategories>Filtrar por categorias</S.TitleCategories>
        {sideLinks.map((values) => {
          return (
            <S.ListCategoriesLinks
              onClick={() => handleClick(values.categorie)}
              key={values.id}
            >
              + {values.categorie}
            </S.ListCategoriesLinks>
          );
        })}
        <br />
        <br />
        <S.TitleCategories>Filtrar por estilos</S.TitleCategories>
         {navStyle.map((values) => {
          return (
            <S.ListCategoriesLinks 
            onClick={() => handleClickGroup(values.style)}
            key={values.id}>
              + {values.style}
            </S.ListCategoriesLinks>
          );
        })}
      </S.ListCategories>
    </S.ContainerSide>
  );
};

export default SideBarNavigate;
