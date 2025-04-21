import api from "../api/axios";
import { Category, Product } from "../interface/CategoriesResponse";
import { ProductCataLog } from "../utils/interfaces/Product";

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>("/api/v1/car/categories");
  return response.data ?? [];
};

export const getProductByCategory = async (
  category: string,
): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>(
      `/api/v1/car/category/${category}`,
    );

    const filtered = response.data;
    return filtered;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};

export const saveLogPurchase = async (
  product: ProductCataLog,
): Promise<boolean> => {
  try {
    const response = await api.post<boolean>("/api/v1/car/purchase", product);

    return response.data;
  } catch (error) {
    console.error("Error al guardar el log:", error);
    return false;
  }
};
