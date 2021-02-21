import "./App.css";
import { useState } from "react";
import { ThemeButton } from "./styles";
import { GlobalStyle } from "./styles";
import ShopComponents from "../src/components/Home";
import ProductsList from "../src/components/ProductList";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
  },
  mainColor: "##000000",
  backgroundColor: "#FDFFFD",
  black: "#000000",
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ThemeButton onClick={toggleTheme}>Dark Mode</ThemeButton>
      <GlobalStyle />
      <ShopComponents />
      <ProductsList />
    </ThemeProvider>
  );
}

export default App;
