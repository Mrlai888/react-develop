/** @format */

import React from "react"
import { Provider } from "react-redux"
import { HashRouter as Router, Route, Switch } from "react-router-dom"

// import fakeAuth from "./fakeAuth"
import PrivateRoute from './utils/PrivateRoute'
import BaseLayout from "./layouts/BaseLayout"
import Login from "./views/Login"
import Register from "./views/Register"
import store from "./store"
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute path="/" component={BaseLayout}></PrivateRoute>
          {/* 实现登录拦截 */}
          {/* <Route
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
          ></Route> */}
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
