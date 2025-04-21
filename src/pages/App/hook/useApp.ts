import { useFilters } from "../../../hooks/useFilters";

import { useEffect, useState } from "react";
import { getCategories } from "../../../services/carServices";
import { Category, Product } from "../../../interface/CategoriesResponse";

export function useApp() {
  const { filterProducts } = useFilters();
  const filteredProducts: Product[] = filterProducts();
  const [listCategories, setListCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();

      response.push({
        caprCodigo: 0,
        caprId: 0,
        caprNombre: "all",
        caprNombreRuta: "all",
        caprPadre: "all",
        caprStatus: "all",
        catalogoProd: [],
      });
      setListCategories(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setListCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    filteredProducts,
    listCategories,
  };
}
