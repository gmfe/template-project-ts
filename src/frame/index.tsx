import React from 'react'
import ErrorBoundary from './error'
import { HashRouter as Router, Redirect } from 'react-router-dom'
import { AutoRouter } from '@gm-common/router'
import { configure } from 'mobx'

import App from './app'

// mobx 严格模式
configure({ enforceActions: 'always' })

const Root = () => (
  <ErrorBoundary>
    <Router>
      <App>
        <AutoRouter>
          <Redirect exact from='/' to='/home' />
        </AutoRouter>
      </App>
    </Router>
  </ErrorBoundary>
)

export default Root
