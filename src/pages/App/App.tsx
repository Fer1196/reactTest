import "./App.css";
import { Header } from "../../components/Header/Header";
import { GridProducts } from "../../components/GridProducts/GridProducts";
import { Cart } from "../../components/Cart/Carts";
import { Footer } from "../../components/Footer/Footer";
import { useApp } from "./hook/useApp";

function App() {
  const { filteredProducts, listCategories } = useApp();
  return (
    <>
      <Header categories={listCategories} />
      <Cart />
      <GridProducts products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
