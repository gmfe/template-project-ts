declare module 'gm-i18n' {
  function t(text: string, config?: { [key: string]: string }): string

  class i18next {
    static t(text: string, config?: { [key: string]: string }): string
  }

  export { t, i18next }
}

declare module '*.svg' {
  import React from 'react'
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}
