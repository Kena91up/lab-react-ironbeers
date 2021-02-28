import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Beers from './components/Beers';
import Header from './components/Header';
import Home from './components/Home'
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer'

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/beers/:beerId" component={SingleBeer}/>
          <Route exact path="/random-beer" component={RandomBeer}/>
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    )
  }
}
export default App