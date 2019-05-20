import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';
import './index.css';


const routing = (

<Router>
  <div className="container">
  <ul class="nav">
  <li class="nav-item">
  <Link className="nav-link active" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link" to="/users">Users</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link" to="/contact">Contact</Link>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
  </div>
</Router>

);


ReactDOM.render(routing,  document.getElementById('root'))
