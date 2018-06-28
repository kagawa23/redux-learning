import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createStore, applyMiddleware, compose } from 'redux';
import { counter, addGUN, removeGUN, addGunAsync } from './index.redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Link,Switch,Redirect } from 'react-router-dom';

const reduxDevTool = window.devToolsExtension ? window.devToolsExtension : () => { };
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevTool()));

function erying() {
    return <h1>二营</h1>
}

function qibinglian() {
    return <h1>骑兵连</h1>
}

// class Test extends React.component {
//     render()
// }
function test(props) {
    console.log(props);
return <h1>测试组建</h1>
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">一营</Link></li>
                    <li><Link to="/erying">二营</Link></li>
                    <li><Link to="/qibinglian">骑兵连</Link></li>
                </ul>
                <Redirect to='/'></Redirect>

                <Switch>
                    <Route path='/'  exact component={App}></Route>
                    <Route path='/erying' component={erying}></Route>
                    <Route path='/qibinglian' component={qibinglian}></Route>
                    <Route path='/:location' component={test }></Route>
                </Switch>
            </div>
        </BrowserRouter> 
    </Provider>, document.getElementById('root'));

