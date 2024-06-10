import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

export const getAllProducts = async () => {
    const response = await axiosInstance.get('/products?sort=desc');
    return response.data;
};

export const getCategories = async () => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
};
