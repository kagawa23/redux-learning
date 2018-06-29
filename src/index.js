import React from 'react';
import ReactDom from 'react-dom';
// import App from './app';
import dashboard from './dashboard';
import auth from './auth';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
//import { counter, addGUN, removeGUN, addGunAsync } from './index.redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga' 
import { Provider } from 'react-redux';
import {rootSaga} from './sagas'

import { BrowserRouter, Route, Link,Switch,Redirect } from 'react-router-dom';

const reduxDevTool = window.devToolsExtension ? window.devToolsExtension : () => { };

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), reduxDevTool()));

sagaMiddleware.run(rootSaga)

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/login">登录</Link></li>
                    <li><Link to="/dashboard">管理</Link></li>
                </ul>
                <Switch>
                    <Route path='/dashboard'  exact component={dashboard}></Route>
                    <Route path='/login' component={auth}></Route>
                </Switch>
            </div>
        </BrowserRouter> 
    </Provider>, document.getElementById('root'));

