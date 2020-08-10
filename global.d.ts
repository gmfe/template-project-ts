interface Window {
  requestIdleCallback(fn: () => any): void
  __wxjs_environment: string
  __PRODUCTION__: string
  __VERSION__: string
  __NAME__: string
  __CLIENT_NAME__: string
  __COMMIT__: string
  __BRANCH__: string
}

declare const __PRODUCTION__ = 'true'
declare const __VERSION__ = '1.0.0'
declare const __NAME__ = 'projectx'
declare const __CLIENT_NAME__ = 'GmProjectX'
declare const __COMMIT__ = 'none'
declare const __BRANCH__ = 'none'
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
