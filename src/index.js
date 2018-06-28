import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createStore, applyMiddleware, compose } from 'redux';
import { counter,addGUN, removeGUN, addGunAsync } from './index.redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const reduxDevTool = window.devToolsExtension ? window.devToolsExtension:()=>{};
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevTool()));

ReactDom.render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

