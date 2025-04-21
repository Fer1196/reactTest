import { useNavigate } from "react-router-dom";
import { ProductInfo } from "../../utils/interfaces/Product";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export function CartItem({
  //thumbnail,
  //price,
  //title,
  cproNombre,
  cproCodigo,
  quantity,
  addToCart,
  removeFromCart,
}: ProductInfo): JSX.Element {
  const navigate = useNavigate();
  return (
    <li
      style={{
        borderBottom: "1px solid #444",
        paddingBottom: "16px",
      }}
    >
      <img
        src={"https://m.media-amazon.com/images/I/61c+9VBGXHL._AC_SY355_.jpg"}
        alt={"title"}
        onClick={() => {
          navigate(`/product/${cproCodigo}`);
        }}
      />
      <div>
        <strong>{cproNombre}</strong> - ${1}
      </div>

      <footer>
        <small>Qty:{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
      <div>
        <button onClick={removeFromCart}>
          <RemoveShoppingCartIcon />
        </button>
      </div>
    </li>
  );
}
