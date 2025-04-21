export interface Product {
  cproId: number;
  cproCodigo: number;
  caprId: number;
  unidCodigo: number;
  cproCodigoint: string;
  cproCodigobarras: string;
  cproNombre: string;
  cproDescripcion: string;
  cproMarca: string;
  cproUbicacion: string;
  cproTipoPrecio?: number;
}

export interface ProductCart extends Product {
  quantity: number;
}

export interface ProductInfo extends ProductCart {
  addToCart: () => void;
  removeFromCart: () => void;
}

export interface ProductCataLog {
  list: ProductCart[];
  total: number;
  date: string;
}
