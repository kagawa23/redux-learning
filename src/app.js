import React from 'react';
import { connect } from 'react-redux';
import { addGUN,addGunAsync,removeGUN} from './index.redux'

const mapStateToProps = (state) => {
    return { num: state}
}

const actionCreator = { addGUN,addGunAsync,removeGUN}

@connect(mapStateToProps,actionCreator)

class App extends React.Component {
    render() {
        const { num, addGUN:addGun, removeGUN:removeGun, addGunAsync} = this.props;
        return (
        <div>
        <h1>现在有机枪{num}把</h1>
            <button onClick={addGun}>申请武器</button>
            <button onClick={removeGun}>上交武器</button>
            <button onClick={addGunAsync}>拖两天再给</button>
        </div>
        )
    }
}


// App = connect(mapStateToProps,actionCreator)(App);
export default App;