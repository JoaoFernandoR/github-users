import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Pages
import Dashboard from './pages/Dashboard/Dashboard'
import Error from './pages/Error/Error'
import Login from './pages/Login/Login'

const App = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Dashboard} exact/>
      <Route path="/login" component={Login} />
      <Route path="*" component={Error}/>
    </Switch>
  </BrowserRouter>      
  )
}

export default App