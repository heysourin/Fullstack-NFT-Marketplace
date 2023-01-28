import "./App.css";
import Artworks from "./components/Artworks";
import CreateNFT from "./components/CreateNFT";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Transactions from "./components/Transactions";

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
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black">
        <Header />
        <Hero />
        <Artworks />
        <Transactions />
        <CreateNFT />
        <Footer />
      </div>
    </div>
  );
}

export default App;
