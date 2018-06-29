import React from 'react';
import { connect } from 'react-redux';
import { addGUN,addGunAsync,removeGUN} from './index.redux'
import { LogOutAction } from './auth.redux';

const mapStateToProps = ({counter}) => {
    return { num: counter}
}

const actionCreator = { addGUN,addGunAsync,removeGUN}

@connect(mapStateToProps,actionCreator)

class App extends React.Component {
    crossOrigin(){
        // fetch('http://localhost:9093/data').then(data=>data.json).then(data=>{
        //     alert(data);
        // }).catch(err=>{
        //     console.log(err);
        // })
//         const dom = document.getElementsByTagName('header');
//      //   document.appendChild(dom);

//         var xmlString = "<script src='http://localhost:9090/student?callback=showData'><\/script>";
//   let parser = new DOMParser()
// let doc = parser.parseFromString(xmlString, "text/xml").getElementsByName('script');
let script = document.createElement('script');
var a = document.createAttribute("src");
a.value = "http://localhost:9093/jsonp";
script.setAttributeNode(a);
// script.attributes('src','http://localhost:9093/data')
document.head.appendChild(script)
window.callback=(data)=>{
    console.log(data);
};
    }
    render() {
        const { num, addGUN:addGun, removeGUN:removeGun, addGunAsync} = this.props;
        return (
        <div>
        <h1>现在有机枪{num}把</h1>
            <button onClick={addGun}>申请武器</button>
            <button onClick={removeGun}>上交武器</button>
            <button onClick={addGunAsync}>拖两天再给</button>
            <button onClick={this.crossOrigin}>跨域请求</button>
        </div>
        )
    }
}


// App = connect(mapStateToProps,actionCreator)(App);
export default App;