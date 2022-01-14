import { createContext, ReactNode, useEffect, useState } from "react";
import { allProducts } from "../Components/CardsProducts/Produtos";

type ProductType = {
  nameProduct: string;
  imageProduct: string;
  descriptionProduct: string;
  group: string;
};

type CategoryContextType = {
  products: ProductType[];
  handleFilter: (category: string) => void;
  handleFilterGroup: (group: string) => void;
};

type CategoryContextProviderProps = {
  children: ReactNode;
};

export const CategoryContext = createContext({} as CategoryContextType);
export function CategoryContextProvider(props: CategoryContextProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  function getAllProducts() {
    setProducts(allProducts);
  }

  function handleFilter(category: string) {
    if (category === "Todos os produtos") {
      getAllProducts();
    } else {
      getAllProducts();
      setProducts((prevProducts) => {
        return prevProducts.filter(
          (product: ProductType) => product.nameProduct === category
        );
      });
    }
  }

  function handleFilterGroup(group: string) {
    getAllProducts();
    setProducts((prevProducts) => {
      return prevProducts.filter(
        (product: ProductType) => product.group === group
      );
    });
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <CategoryContext.Provider value={{ products, handleFilter, handleFilterGroup }}>
      {props.children}
    </CategoryContext.Provider>
  );
}
