import React from 'react'
import ImgLogo from '@/img/logo.png'
import SvgSuccess from '@/svg/success.svg'
import { useLocation } from 'react-router'
import globalStore from '@/stores/global'
import { observer } from 'mobx-react'

const Child = ({ children }) => {
  const { pathname, search } = useLocation()

  return React.cloneElement(children, {
    key: pathname + search,
  })
}

const MobxExample = observer(() => {
  return (
    <div>
      mobx
      {globalStore.name}
      <button
        onClick={() => {
          globalStore.setName('projectx')
        }}
      >
        setName projectx
      </button>
    </div>
  )
})

const App = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      app
      <MobxExample />
      <img src={ImgLogo} alt='' style={{ height: '50px' }} />
      <SvgSuccess />
      <Child>{children}</Child>
    </div>
  )
}

export default App
