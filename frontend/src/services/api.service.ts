import { Product } from '../models/Product';

const BASE_URL = 'https://fakestoreapi.com';

/**
 * Busca todos os produtos na FakeStore API.
 */
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`Erro na rede da API FakeStore: ${response.status}`);
    }
    
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Falha ao se conectar com a API de Produtos:", error);
    throw error;
  }
};
