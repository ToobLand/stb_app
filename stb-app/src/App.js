import React from 'react';
import { Provider } from 'react-redux';
import {LandingPage,ModuleBuilder,TheoryBuilder} from './components/pages/index.js';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './state/store';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, useParams } from 'react-router-dom';
export const history = createBrowserHistory(); 

function App() {
  return (
    <Router history={history}>
    <Provider store={store}>
    <CssBaseline />
    <div className="App">
      <Switch>
        
        <Route path="/folder/:id_folder/" component={LandingPage} />
        <Route path="/module/:id_module/" component={ModuleBuilder} />
        <Route path="/theoryblock/:id_contentblock/" component={TheoryBuilder} />
      </Switch>
      
    </div>
    </Provider>
    </Router>
  );
}

export default App;
