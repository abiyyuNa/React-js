import React, {Component,Fragment} from 'react';
import './style/styles.css';
import Home from './content/Home/Home';
import Form from './content/event/event';
// import Blogs form './Blogs/Blogs';

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

class App extends Component{
  render() {
    return(
      <Router>
        <div className="wraaper">
          <div className="header">
            <div className="navbar">
              <div className="logo">
                <img src={require('./logo/babastudio-logo.png')} alt="" className="imgfluid"/>
              </div>
              <div className="menu">
                <ul>
                  <Link to="/" className="11">Home</Link>
                  <Link to="/" className="11">Blogs</Link>
                  <Link to="/" className="11">Galery</Link>
                  <Link to="/form" className="11">Contak</Link>
                  <Link to="/event" className="11">Simple event</Link>
                </ul>
              </div>
            </div>
          </div>
          <Fragment>
            {/* Home*/}
            <Route path="/" exact component={Home}/>
            <Route path="/form" component={Form}/>

          </Fragment>
        </div>
      </Router>
    );
  }
}
export default App;
