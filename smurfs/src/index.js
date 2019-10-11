import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers/index';

import Village from './components/Village';
import AddSmurf from './components/AddSmurf';

const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <div className="App">
      <h1>Smurfs</h1>
      <Village />
      <AddSmurf/>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);