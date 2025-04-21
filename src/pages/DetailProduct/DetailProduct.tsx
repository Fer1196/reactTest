import "./DetailProduct.css";
import { Cart } from "../../components/Cart/Carts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { BriefDetail } from "../../components/BriefDetail/BriefDetail";
import { GalleryImages } from "../../components/GalleryImages/GalleryIImages";
import { CustomizeButton } from "../../components/CustomizeButton/CustomizeButton";
import { useDetailProducts } from "./hook/useDetailProducts";

function DetailProduct() {
  const { handleNavigation, itemShow, addToCart } = useDetailProducts();
  const image: string =
    "https://m.media-amazon.com/images/I/71TxHKKIqWL._AC_SY355_.jpg";
  const images: string[] = [
    "https://m.media-amazon.com/images/I/61qRgmCOQqL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/61VJlC5049L._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/71Ya2Y5yfaL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/61VJlC5049L._AC_SL1500_.jpg",
  ];
  return (
    <>
      <Cart />
      <div>
        <div className="grid-container">
          <div className="grid-item">
            <h1>{itemShow.cproNombre}</h1>

            <img src={image} alt="Preview" className="grid-item-image" />
            <span>{itemShow.cproDescripcion ?? ""}</span>

            <GalleryImages images={images} />
          </div>
          <div className="grid-item">
            <BriefDetail itemShow={itemShow} />

            <CustomizeButton
              onclick={() => {
                addToCart(itemShow);
              }}
              text="Agregar al carrito"
              color="#FF4D4D"
            >
              <ShoppingCartIcon />
            </CustomizeButton>

            <CustomizeButton
              onclick={() => {
                handleNavigation("/cart");
              }}
              text="Ir a Pagar"
              color="#01eac2"
            ></CustomizeButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
