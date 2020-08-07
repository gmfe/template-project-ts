import React from 'react'

import ErrorBoundary from './error'

import Router from './router'

const Root = () => (
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>
)

export default Root
