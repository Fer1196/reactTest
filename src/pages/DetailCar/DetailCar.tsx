import { Cart } from "../../components/Cart/Carts";
import { useCart } from "../../hooks/useCart";
import { ProductCart } from "../../utils/interfaces/Product";
import "./DetailCar.css";
export function DetailCar() {
  const { cart, total, purchase } = useCart();
  let totalCal: number = 0;
  console.log(total, totalCal);

  return (
    <>
      <Cart />
      <div className="cart">
        <h1 className="cart-title">Carrito a Pagar</h1>

        <div className="cart-title-row">
          <div className="row-first">
            <span className="cart-span">Qauntity</span>
          </div>
          <div className="row-second">
            <span className="cart-span">Image</span>
          </div>
          <div className="row-third">
            <span className="cart-span">Detail Product</span>
          </div>
          <div className="row-four">
            <h2> Unit Price</h2>
          </div>
          <div className="row-five">
            <h2> Total Price</h2>
          </div>
        </div>

        {cart.map((ele: ProductCart) => {
          totalCal += 1 * ele.quantity;
          return (
            <div className="cart-list">
              <div className="row-first">
                <span className="cart-span">{ele.quantity}</span>
              </div>
              <div className="row-second">
                <img
                  src={
                    "https://m.media-amazon.com/images/I/717+1W8QLVL._AC_SY355_.jpg"
                  }
                  className="list-img"
                ></img>
              </div>
              <div className="row-third">
                <span className="cart-span">{ele.cproNombre}</span>
              </div>
              <div className="row-four">
                <span className="cart-span">{1}</span>
              </div>
              <div className="row-five">
                <span className="cart-span">
                  {(1 * ele.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}

        <div className="cart-total">
          <div className="total-row">
            <h2>Total Price: </h2>

            <h1>$ {total.toFixed(2)}</h1>
          </div>
        </div>

        <button className="cart-button" onClick={() => purchase()}>
          Pay
        </button>
      </div>
    </>
  );
}
