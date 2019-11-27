import React,{Component} from 'react';
import Grid from './Grid';
import '../style/style.css';
import { BrowserRouter as Router,Link } from "react-router-dom";
import Home from './Home/Home';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render(){
    return(
      <Router>
      <div className="header">
        <div className="container warna">
          <nav className="navbar navbar-expand-lg navbar-light warna">
            <Link className="navbar-brand" to=""><img src={require("../logo/Logo.jpg")} className="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PROMO</Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="#" class="dropdown-item">PROMO</Link>
                    <Link to="#" class="dropdown-item">Partnership</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PAKET & ADD-ON</a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a href="#" class="dropdown-item">Action</a>
                    <a href="#" class="dropdown-item">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">PUSAT BANTUAN</a>
                </li>
              </ul>
            </div>
          </nav>

        </div>
        <Grid/>
        <Home/>
      </div>
      
      </Router>
    )
  }
} 

export default App;
