import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI
      return (
        <div>
          <h2>Something went wrong with the Navbar component!</h2>
          {/* You can also render the error or errorInfo here */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
