import React from 'react'
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/Store';

function App() {
  return (
  <React.Fragment>
  <Provider store={store}>
  <Head/>
  <Body/>
  </Provider>
  </React.Fragment>
    
  
  );
}

export default App;
