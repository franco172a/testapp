import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Poppins:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(

<Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <AuthorizeRoute
                path="/app"
                component={ViewApp}
            />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>

 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
