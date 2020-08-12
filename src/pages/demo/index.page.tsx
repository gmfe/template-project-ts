import React from 'react'
import ImgLogo from './logo.png'
import SvgSuccess from './svg/success.svg'
import { observer } from 'mobx-react'
import globalStore from '@/stores/global'

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

const Demo = () => {
  return (
    <div>
      demo
      <MobxExample />
      <img src={ImgLogo} alt='' />
      <SvgSuccess />
    </div>
  )
}

export default Demo
