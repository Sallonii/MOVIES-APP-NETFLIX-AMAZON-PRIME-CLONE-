import {Switch, Route} from 'react-router-dom'

import './App.css'

import LoginForm from './components/LoginForm'

import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
  </Switch>
)

export default App
