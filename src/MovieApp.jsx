import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './MovieHome'
import MovieSingle from './MovieSingle'

function MovieApp() {
  return (
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/movie/:id" children={<MovieSingle />} />
      </Switch>
  )
}

export default MovieApp
