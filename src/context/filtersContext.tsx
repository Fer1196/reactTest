import { createContext, useEffect, useState } from "react";
import { Filter } from "../utils/interfaces/Filter.interface";
//import { products as initialProducts } from "../mocks/products.json";
//import { Product } from "../utils/interfaces/Product";
import { getProductByCategory } from "../services/carServices";
import { Product } from "../interface/CategoriesResponse";

interface FiltersContext {
  filters: Filter;
  setFilters: (prevState: React.SetStateAction<Filter>) => void;
  products: Product[];
}

export const FilterContext = createContext<FiltersContext>({
  filters: {
    category: "all",
  },
  setFilters: () => {},
  products: [],
});

export function FiltersProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [filters, setFilters] = useState<Filter>({
    category: "all" as string,
  });

  const [productList, setProductList] = useState<Product[]>([]);

  const fetchCategories = async (category: string) => {
    try {
      const res = await getProductByCategory(category);
      setProductList(res);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    setProductList([]);
    fetchCategories(filters.category ?? "all");
  }, [filters.category]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        products: productList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
