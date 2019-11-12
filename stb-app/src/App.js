import React from 'react';
import { Provider } from 'react-redux';
import {LandingPage} from './components/pages/index.js';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './state2/store';

function App() {
  return (
    <Provider store={store}>
    <CssBaseline />
    <div className="App">
      <LandingPage />
    </div>
    </Provider>
  );
}

export default App;
