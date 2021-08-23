import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import Skills from './Components/Skills/Skills.jsx'
import Home from './Components/Home/Home'


function App() {
  return (
    <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
          </ul>

          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
        </div>
      </HashRouter>
  );
}

export default App;
