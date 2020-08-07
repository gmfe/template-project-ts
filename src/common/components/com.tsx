import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface ComProps extends HTMLAttributes<HTMLDivElement> {
  name?: string
}

const Com: FC<ComProps> = (props) => {
  const { name, className, children, ...rest } = props

  return (
    <div {...rest} className={classNames('b-lalala', className)}>
      {children}
    </div>
  )
}

export default Com
