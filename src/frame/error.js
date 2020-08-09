import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ error: { error, info } })

    // 错误上报
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ height: '100vh', paddingTop: '150px' }}>
          react componentDidCatch
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
