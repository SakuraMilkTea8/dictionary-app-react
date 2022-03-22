import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This app was coded by{" "}
          <a href="https://shr.link/3t82s" target="_blank" rel="noreferrer">
            Ellie
          </a>{" "}
          , and is{" "}
          <a
            href="https://github.com/SakuraMilkTea8/Weather-App-React"
            target="_blank"
            rel="noreferrer"
          >
            open-source.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
