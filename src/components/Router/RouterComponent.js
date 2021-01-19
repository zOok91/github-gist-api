import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import TabnameComponent from '../../common-components/Tabname/TabnameComponent';
import GistsComponent from '../Gists/GistsComponent';
import NoPageFoundComponent from '../../common-components/NoPageFound/NoPageFoundComponent';
import gist from '../../assetts/svg8.svg'
import forks from '../../assetts/svg11.svg'
import './RouterComponent.scss';

function RouterComponent({user}) {
  const routes = [["All gists","/gists",gist],
                  ["Forks","/forks",forks]];
  return (
    <div className="router-container">
        <Router>
            <nav className="navbar-container">
              {routes.map((route,ind)=>(
                   <NavLink key={ind} activeClassName="active-route" to={route[1]}><TabnameComponent logo={route[2]} title={route[0]}/></NavLink>))}
            </nav>
            <Switch>
              <Route exact path="/" render={()=><Redirect to="/gists" />}/>
              <Route path="/gists">
                <GistsComponent user={user}/>
              </Route>
              <Route render={props=><NoPageFoundComponent {...props}/>}/>
            </Switch>
        </Router>
    </div>
  );
}

export default RouterComponent;
