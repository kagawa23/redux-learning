import React from 'react';

class App extends React.Component {
    render() {
        const { store, addGun, removeGun} = this.props;
        const num = store.getState();
        return (
        <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={()=>store.dispatch(addGun())}>申请武器</button>
        <button onClick={()=>store.dispatch(removeGun())}>上交武器</button>
        </div>
        )
    }
}

export default App;