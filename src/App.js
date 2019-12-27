/** @format */

import React from "react"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import fakeAuth from "./fakeAuth"
import BaseLayout from "./layouts/BaseLayout"
import Login from "./views/Login"
import Register from './views/Register'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path ="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        {/* <Route path="/" component={BaseLayout}></Route> */}
        {/* 实现登录拦截 */}
        <Route
          path="/"
          render={props => {
            if (fakeAuth.isAuthenticated) {
              return <BaseLayout {...props} />
            } else {
              return (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: props.match.url
                  }}
                ></Redirect>
              )
            }
          }}
        ></Route>
      </Switch>
    </Router>
  )
}

export default App
