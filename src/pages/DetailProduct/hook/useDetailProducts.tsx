import { useContext } from "react";
import { useNavigatePages } from "../../../hooks/useNavigatePages";
import { FilterContext } from "../../../context/filtersContext";
import { useParams } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { Product } from "../../../interface/CategoriesResponse";

export function useDetailProducts() {
  const { handleNavigation } = useNavigatePages();
  const { products } = useContext(FilterContext);
  const { id } = useParams();
  const { addToCart } = useCart();

  const productFake: Product = {
    caprId: 0,
    cproCodigo: 0,
    cproCodigobarras: "",
    cproCodigoint: "",
    cproDescripcion: "",
    cproId: 1,
    cproMarca: "",
    cproNombre: "",
    cproUbicacion: "",
    unidCodigo: 0,
  };

  const itemShow: Product =
    products.find((item) => {
      return item.cproCodigo === parseInt(id ?? "0", 10);
    }) || productFake;

  return { handleNavigation, itemShow, addToCart };
}
