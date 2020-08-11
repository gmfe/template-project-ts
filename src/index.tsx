import { hot } from 'react-hot-loader/root'
import ReactDOM from 'react-dom'
import React from 'react'
import Root from './frame'

import './css/index.less'

const HotRoot = hot(Root)

ReactDOM.render(<HotRoot />, document.getElementById('appContainer'))
