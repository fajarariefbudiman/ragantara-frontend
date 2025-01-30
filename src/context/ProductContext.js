import React, { useContext, createContext, useState, useEffect } from "react";

const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1323/api/products")
      .then((response) => response.json())
      .then((response) => {
        // console.log(" Data Product", response.data);
        // console.log("Data Products", data);
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  },[]);

  return <productContext.Provider value={{ products, setProducts }}>{children}</productContext.Provider>;
};
export const useProduct = () => useContext(productContext);
