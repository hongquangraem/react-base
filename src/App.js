import { ConnectedRouter } from 'connected-react-router'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { history } from './utils/history'

function App() {
  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Switch>
          <Route path="/" render={() => <div>Home page</div>} />
          <Route path="/users" render={() => <div>Users page</div>}>
            AA
          </Route>
        </Switch>
      </Suspense>
    </ConnectedRouter>
  )
}

export default App
