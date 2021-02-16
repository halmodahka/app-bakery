import "./App.css";
import logo from "./Vegan-Chocolate-Cake-1.jpg";
function App() {
  return (
    <div className="App">
      <h1>Cake and More</h1>
      <div className="subtitle">
        <p>Happiness is a Piece of Cake</p>
        <img src={logo} width="20%" height="20%" />
      </div>
    </div>
  );
}

export default App;
