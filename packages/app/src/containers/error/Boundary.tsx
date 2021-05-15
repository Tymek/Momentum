import React, { Component, ErrorInfo, ReactNode } from 'react'

import ErrorComponent from './ErrorComponent'

type ErrorBoundaryProps = { children: ReactNode }

type ErrorBoundaryState = {
  hasError?: boolean
  message?: string
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    if (error?.message) {
      return { message: error.message, hasError: true }
    }

    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo)
  }

  render(): ReactNode {
    const { message, hasError } = this.state

    if (hasError) {
      return <ErrorComponent message={message} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
