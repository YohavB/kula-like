import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import MainHR from "./HR-side/MainHR";
import MainJunior from "./Junior-side/MainJunior";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {" "}
          <Route exact path="/" component={Home} />
          <Route path="/hr-side" component={MainHR} />
          <Route path="/junior-side" component={MainJunior} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
