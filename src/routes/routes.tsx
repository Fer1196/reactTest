import App from "../pages/App/App";
import DetailProduct from "../pages/DetailProduct/DetailProduct";
import { DetailCar } from "../pages/DetailCar/DetailCar";
import { Welcome } from "../pages/Welcome";
import { NotFound } from "../pages/NotFound";

type JSXComponent = () => JSX.Element;

interface Route {
  to?: string;
  path: string;
  name: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
}

export const routes: Route[] = [
  {
    path: "/",
    Component: Welcome,
    name: "welcome",
    to: "/",
  },
  {
    path: "/shopping",
    Component: App,
    name: "shopping",
    to: "/shopping",
  },
  {
    path: "/product/:id",
    Component: DetailProduct,
    name: "product",
    to: "/product",
  },
  {
    path: "/cart",
    Component: DetailCar,
    name: "cart",
    to: "/cart",
  },

  {
    path: "/notroute",
    Component: NotFound,
    name: "notroute",
    to: "/notroute",
  },
];
