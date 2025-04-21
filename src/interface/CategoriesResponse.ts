export interface Category {
  caprId: number;
  caprCodigo: number;
  caprNombre: string;
  caprNombreRuta: string;
  caprPadre: string;
  caprStatus: string;
  catalogoProd: Product[];
}

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
