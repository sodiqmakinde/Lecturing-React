import Hike from "./assets/images/hike.jpg";
// import "./App.css";


function App() {
const userName = "Fawaz"


  return (
    <div className="App">
      <header className="App-header">
        <h3>{userName}</h3>

        <img src={Hike} className="App-logo" alt="logo" />

        <h1> Hello React</h1>
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
      </header>
    </div>
  );
}

export default App;
