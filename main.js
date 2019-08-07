import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mainReducer from './src/reducer';
import mainSaga from './src/sagas';
import App from './src/containers/App';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mainSaga);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('app'));
