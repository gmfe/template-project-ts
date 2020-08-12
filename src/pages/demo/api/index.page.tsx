import React from 'react'
import { Group } from 'projectx/enterprise/proto/enterprise'

const group: Group = {
  group_id: 'dfdfd',
  is_valid: false,
  name: 'afgsdfgsdf',
  address: {
    address_id: 'fdfdf',
  },
  type: Group.Type.EXTERNAL,
}

const Demo = () => {
  console.log(group)
  return <div>api</div>
}

export default Demo
