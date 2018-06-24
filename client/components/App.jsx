import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Homepage from './Home'
import Header from './Header'
import Signup from './Signup'
import Users from './Users'
import StoriesHome from './StoriesHome'
import StoryPageOne from './StoryPageOne'

const App = () => {
  return (
    <Router>
      <div>
        <section className="section hero is-fullheight has-text-centered is-link is-bold">
        <Route path='/' component={Header}/>
        <Route exact path="/" component={Homepage}/>
        <Route path='/stories' component={StoriesHome}/>
        <Route path='/stories/story/one' component={StoryPageOne}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/users' component={Users}/>
        </section>
    </div>
    </Router>
  )
}

export default App
