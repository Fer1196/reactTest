import { useContext } from "react";
import { FilterContext } from "../context/filtersContext";

export function useFilters() {
  const { filters, setFilters, products } = useContext(FilterContext);

  const filterProducts = () => {
    return products;
  };

  return { filters, setFilters, filterProducts };
}
