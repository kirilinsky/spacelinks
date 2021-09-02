import {
  Redirect,
  Route,
  HashRouter as Router,
  Switch,
} from "react-router-dom";
import AOS from "aos";
import Header from "./components/Header";
import Main from "./Pages/Main";
import Bio from "./Pages/Bio";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
function App() {
  AOS.init();
  return (
    <Router>
      <div className="space">
        {/*  <Header /> */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/bio">
            <Bio />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
