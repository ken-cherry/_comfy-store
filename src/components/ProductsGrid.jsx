import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  console.log(products);

  return <h2>ProductsGrid</h2>;
};

export default ProductsGrid;
