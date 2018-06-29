import React from "react";
import { connect } from "react-redux";
import { LoginAction, LogOutAction,FetchUserRequest } from "./auth.redux";
import { Redirect } from "react-router-dom";

@connect(
  ({ auth }) => ({ auth }),
  {
    LoginAction,
    LogOutAction,
    FetchUserRequest
  }
)
class Auth extends React.Component {
componentDidMount(){
    this.props.FetchUserRequest();
}
  render() {
    const { auth, LoginAction } = this.props;

    return (
      <div>
        <h1>{auth.user},1932</h1>
        {auth.isAuth ? <Redirect to="/dashboard" /> : null}
        <h1>需要登录</h1>
        <button onClick={LoginAction}>登录</button>
      </div>
    );
  }
}

export default Auth;
