import { Product as ProductInterface } from "../../utils/interfaces/Product";
import { ImageGrid } from "../ImageGrid.css/ImageGrid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Product.css";
import { useCart } from "../../hooks/useCart";

interface Props {
  item: ProductInterface;
}

export const Product = ({ item }: Props) => {
  const imageWildcard =
    "https://m.media-amazon.com/images/I/61yfaveEujL._AC_SY450_.jpg";
  const { addToCart } = useCart();
  return (
    <div className="product">
      <div className="product-header">
        <span className="header-title">{item.cproNombre}</span>
      </div>
      <ImageGrid image={imageWildcard} id={item.cproCodigo} />
      <div className="flex">
        <span className="label-price">${item.unidCodigo}</span>

        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          <ShoppingCartIcon />
        </button>
      </div>
    </div>
  );
};
