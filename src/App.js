import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Pages
import Dashboard from './pages/Dashboard/Dashboard'
import Error from './pages/Error/Error'
import Login from './pages/Login/Login'
import PrivateRoute from './pages/PrivateRoute'
import AuthWrapper from './pages/AuthWrapper'

const App = () => {

  return (
  <AuthWrapper>
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact>
          <Dashboard />
        </PrivateRoute>
        <Route path="/login" component={Login} />
        <Route path="*" component={Error}/>
      </Switch>
    </BrowserRouter>      
  </AuthWrapper>
  )
}

export default App