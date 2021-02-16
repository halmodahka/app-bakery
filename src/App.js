import "./App.css";
import logo from "./Vegan-Chocolate-Cake-1.jpg";
import React from "react";
import products from "./products";
import styles from "./styles";

function App() {
  return (
    <div className="App">
      <h1>Cake and More</h1>
      <div className="subtitle">
        <p>Happiness is a Piece of Cake</p>
        {/* <img alt="cake" src={logo} style={styles.shopImage} /> */}
        <img src={logo} width="20%" height="20%" />
        <div>
          <div style={styles.productsImage}>{productsList}</div>
        </div>
      </div>
    </div>
  );
}

const productsList = products.map((product) => {
  return (
    <div style={styles.product}>
      <img style={styles.ProductImage} alt={product.name} src={product.image} />
      <p style={styles.text}>{product.name}</p>
      <p style={styles.text}>{product.price} KD</p>
    </div>
  );
});

export default App;
