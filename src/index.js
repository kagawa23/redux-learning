import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createStore, applyMiddleware, compose } from 'redux';
import { counter, rootSaga } from './index.redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const reduxDevTool = window.devToolsExtension ? window.devToolsExtension:()=>{};
// const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevTool()));
const sagaMiddleware = createSagaMiddleware();
const store = createStore(counter, compose(applyMiddleware(sagaMiddleware), reduxDevTool()));
//const store = createStore(counter, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

ReactDom.render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

