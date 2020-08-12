import React, { FC } from 'react'
import { useLocation } from 'react-router'

const Child: FC<{ children: React.ReactElement }> = ({ children }) => {
  const { pathname, search } = useLocation()

  return React.cloneElement(children, {
    key: pathname + search,
  })
}

const App: FC<{ children: React.ReactElement }> = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <Child>{children}</Child>
    </div>
  )
}

export default App
