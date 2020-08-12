import React from 'react'
import { Box } from '@gmfe/react'
import { TableX } from '@gmfe/table-x'
import type { TableXColumn } from '@gmfe/table-x'
import { Group } from 'projectx/enterprise/proto/enterprise'
// import ImgLogo from './logo.png'
// import SvgSuccess from './svg/success.svg'

interface InitialDataOptions {
  totalMoney: number
  id: string
  skuMoney: string
  supplierCustomerId: string
  submitTime: string
  status: number
  supplierName: string
  dateTime: string
  deltaMoney: number
  settleSupplierId: string
  address: {
    value: number
    text: string
  }
}

const group: Group = {
  group_id: 'dfdfd',
  is_valid: false,
  name: 'afgsdfgsdf',
  address: {
    address_id: 'fdfdf',
  },
  type: Group.Type.EXTERNAL,
}

const initialData: InitialDataOptions[] = [
  {
    totalMoney: 111,
    id: 'T5991-JHD-2018-07-25-00027',
    skuMoney: '2390.00',
    supplierCustomerId: 'LDP20180117',
    submitTime: '2018-07-25',
    status: 2,
    supplierName: '-',
    dateTime: '2018-07-25',
    deltaMoney: 0,
    settleSupplierId: 'T10953',
    address: {
      value: 33,
      text: '西乡fdsfsdf9',
    },
  },
]

const columns: TableXColumn<InitialDataOptions>[] = [
  {
    Header: '序号',
    id: 'index',
    Cell: (cellProps: { row: { index: number } }) => cellProps.row.index + 1,
    width: 50,
  },
  { Header: '建单时间', show: false, accessor: 'submitTime' },
  {
    Header: '地址',
    accessor: 'address.text',
    width: 200,
    maxWidth: 200,
  },
  {
    Header: '供应商信息',
    accessor: (d: InitialDataOptions) => d.supplierName,
    id: 'supplierName',
  },
  {
    Header: '入库金额',
    accessor: 'totalMoney',
    Cell: (cellProps: any) => {
      return <div>{cellProps.row.original.totalMoney}</div>
    },
  },
]
console.log(group)
const Demo = () => {
  return (
    <Box hasGap>
      <TableX columns={columns} data={initialData} />
    </Box>
  )
}

export default Demo
