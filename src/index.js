import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createStore } from 'redux';
import { counter,addGUN, removeGUN } from './index.redux'

const store = createStore(counter);

function render(){
   ReactDom.render(<App store={store} addGun={addGUN} removeGun={removeGUN}/>, document.getElementById('root'));
}
 render();
store.subscribe(render);
