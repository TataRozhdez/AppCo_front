import React from 'react';
import MainPage from './containers/MainPage/MainPage';
import Charts from './containers/Charts/Charts';
import Stats from './containers/Stats/Stats'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/users" exact component={Charts} />
      <Route path="/user/:id" exact component={Stats} />
      <Redirect to={'/'} />
    </Switch>
  )
}


export default App;
