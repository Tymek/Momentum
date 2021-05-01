import React from 'react'
import ErrorComponent from 'next/error'

export type ErrorBoundaryProps = {
  children?: React.ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
  statusCode: number
  title: string
}

const messages = {
  unknown: 'Coś poszło nie tak 😞',
  network: 'Błąd wczytywania danych 😞',
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, statusCode: 0, title: messages.unknown }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    console.info(error)
    if (error?.message?.includes && error.message.includes('Failed to fetch')) {
      return { hasError: true, statusCode: 503, title: messages.network }
    }

    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <ErrorComponent statusCode={this.state.statusCode} title={this.state.title} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
