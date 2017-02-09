import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise'
import { fetchCocktails } from './actions'
import App from './components/app'


const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

store.dispatch( fetchCocktails() );

console.log(store.getState());


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('container')
)
