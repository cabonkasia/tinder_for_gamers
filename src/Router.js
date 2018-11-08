import React from 'react'
import {Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import MessagesPage from './pages/messagespage'

const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/messages' component={MessagesPage} />
  </Switch>
)

export default Router