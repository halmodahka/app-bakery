import React from "react";
import ProductsItem from "../components/ProductItem";
import SearchBar from "./Searchbar";
import ProductWrapper from "../styles";
import { useState } from "react";
import productStore from "../stores/productStore";
import { observer } from "mobx-react";
import UpdateButton from "../Buttons/UpdateButton";

const Product = () => {
  const [query, setQuery] = useState("");

  const productList = productStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductsItem product={product} key={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ProductWrapper>{productList}</ProductWrapper>
      <UpdateButton />
    </div>
  );
};
export default observer(Product);
