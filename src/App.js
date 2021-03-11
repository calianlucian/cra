import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Component3 from "./components/component3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <br />
        <div>
          <a
            href="/component-1"
            style={{ display: "inline-block", color: "white" }}
          >
            Component 1
          </a>
          <span>&nbsp;|&nbsp;</span>
          <a
            href="/component-2"
            style={{ display: "inline-block", color: "white" }}
          >
            Component 2
          </a>
          <span>&nbsp;|&nbsp;</span>
          <a
            href="/component-3"
            style={{ display: "inline-block", color: "white" }}
          >
            Component 3
          </a>
        </div>
        <Router>
          <Switch>
            <Route exact path="/component-1">
              <Component1 />
            </Route>
            <Route exact path="/component-2">
              <Component2 />
            </Route>
            <Route exact path="/component-3">
              <Component3 />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
