import React from "react";
import products from "../Products";
import ProductsItem from "../components/ProductItem";
import { useState } from "react";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";

const ProductList = () => {
  const [query, setQuery] = useState("");
  <SearchBar setQuery={setQuery} />;

  const filteredCakes = products.filter((product) =>
    product.name.includes(query)
  );
  const productList = filteredCakes.map((product) => (
    <ProductsItem product={product} key={product.id} />
  ));
  return (
    <>
      <SearchBar />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};
export default ProductList;
