/** @format */

import React from "react"
import BaseLayout from "./layouts/BaseLayout"
import { HashRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={BaseLayout}></Route>
      </Switch>
    </Router>
  )
}

export default App
