import React from 'react'
import ErrorBoundary from './error'
import { HashRouter as Router } from 'react-router-dom'
import { AutoRouter } from '@gm-common/router'
import { Redirect } from 'react-router-dom'
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
