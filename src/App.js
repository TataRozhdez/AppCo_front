import React from 'react';
import MainPage from './containers/MainPage/MainPage';
import Charts from './containers/Charts/Charts';
import Stats from './containers/Stats/Stats'
import {Route, Redirect, Switch} from 'react-router'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/users" component={Charts} />
      <Route path="/user/:id" component={Stats} />
      <Redirect to={'/'} />
    </Switch> 
  )
}


export default App;
