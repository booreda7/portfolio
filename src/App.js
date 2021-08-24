import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import Skills from './Components/Skills/Skills.jsx'
import Home from './Components/Home/Home'
import Work from './Components/Work/Work.jsx'
import Contact from './Components/Contact/Contact.jsx'
import resume from './Document.pdf'


function App() {

  const toggleClasses = () => {
    const ul = document.querySelector('.ul')
    const links = document.querySelectorAll('.ul li')
    const burger = document.querySelector('.burger')
     ul.classList.toggle('ul-active')
     links.forEach((link, index) => {
       if(link.style.animation){
         link.style.animation='';
       }else{
            link.style.animation = `animation 0.5s ease forwards ${index/7 + 0.3}s`}
     })
     burger.classList.toggle('toggle')
  }

  return (
    <HashRouter basename="/">
        <div>
          <nav className="nav">
            <div className="logo"> <h1>booreda</h1></div>
            <ul className="ul">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/contact">Contact me</Link></li>
              <li> <a href={resume} download>download resume</a> </li>
            </ul>
            <div class="burger" onClick={toggleClasses}>
              <div class='line1'></div>
              <div class='line2'></div>
              <div class='line3'></div>
            </div>
          </nav>

          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
  );
}

export default App;
