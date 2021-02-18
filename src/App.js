import "./App.css";
import ShopComponents from "../src/components/Home";
import ProductsList from "../src/components/ProductList";
import GlobalStyle from "../src/styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "##000000",
  backgroundColor: "#FDFFFD",
  black: "#000000",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ShopComponents />
      <ProductsList />
    </ThemeProvider>
  );
}

export default App;
