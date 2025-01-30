import React, { useContext, useState, useEffect, createContext } from "react";

const categoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1323/api/categories")
      .then((response) => response.json())
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return <categoryContext.Provider value={{ categories, setCategory }}>{children}</categoryContext.Provider>;
};
export const useCategory = () => useContext(categoryContext);
