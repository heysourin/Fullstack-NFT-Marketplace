import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App min-h-screen bg-slate-500">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="bg-black ">
        <Header />
        <Hero />
      </div>
      <div className="bg-black">
      </div>
    </div>
  );
}

export default App;
