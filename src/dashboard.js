import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { LoginAction, LogOutAction } from "./auth.redux";
import { connect } from "react-redux";
import App from "./app";

function erying() {
  return <h1>二营</h1>;
}

function qibinglian() {
  return <h1>骑兵连</h1>;
}

@connect(
  state => state.auth,
  {
    LogOutAction
  }
)
class Dashboard extends React.Component {
  render() {
    const { isAuth, LogOutAction } = this.props;
    const redirect = <Redirect to="login" ></Redirect>;
    const newLocal = (
      <div>
        <button onClick={LogOutAction}>注销</button>
        <div>
          <ul>
            <li>
              <Link to="/dashborad/">一营</Link>
            </li>
            <li>
              <Link to="/dashborad/erying">二营</Link>
            </li>
            <li>
              <Link to="/dashborad/qibinglian">骑兵连</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/dashborad/erying" component={erying} />
            <Route path="/dashborad/qibinglian" component={qibinglian} />
          </Switch>
          <App />
        </div>
      </div>
    );
    return isAuth ? newLocal : redirect;
  }
}

export default Dashboard;
