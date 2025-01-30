import { useState, useEffect } from "react";

const useProducts = (initialPage = 1, limit = 9) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalItems, setItems] = useState();
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:1323/api/products?page=${currentPage}&limit=${limit}`);
        const data = await response.json();
        setProducts(data.data.products);
        setItems(data.data.totalItems);
        // console.log("Data",data.data);
        // console.log("Total Items",data.data.totalItems);
        // console.log("Total Pages",data.data.totalPage);
        setTotalPages(data.data.totalPage);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, [currentPage, limit]);
  return { products, currentPage, totalItems, totalPages, setCurrentPage };
};

export default useProducts;
