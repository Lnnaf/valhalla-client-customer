import axios from 'axios';
import { Product, ProductCategory } from '../component/productlist/Model';

const API_URL = 'http://localhost:8080/api/v1';

export const getCatories = async () :  Promise<ProductCategory[]> => {
  try {
    const response = await axios.get(`${API_URL}/category/get`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProducts = async (page: number, size: number, categoryId: number) : Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/product/get?page=${page}&size=${size}&categoryId=${categoryId}`);
    return response.data.data.content;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProductsNewestByCategory = async (categoryId: number) : Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/product/get/newest/category/${categoryId}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};