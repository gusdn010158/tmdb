import "./App.css";
import Board from "./Board";
import Bottom from "./Bottom";
import First from "./First";
import Header from "./Header";
import Join from "./Join";
import Latest from "./Latest";
import Popular from "./Popular";
import Say from "./Say";
import Watch from "./Watch";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <First />
        <Say />

        <Latest />

        <Popular />

        <Watch />

        <Join />

        <Board />
        <Bottom />
      </main>
    </div>
  );
}

export default App;
