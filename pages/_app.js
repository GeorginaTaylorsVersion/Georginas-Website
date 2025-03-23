import 'tailwindcss/tailwind.css';
import { Component } from 'react';

// Error boundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="mb-4">The application encountered an error. Please try refreshing the page.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">My College Notes</h1>
          </div>
        </header>
        
        <main>
          <Component {...pageProps} />
        </main>
        
        <footer className="bg-white border-t mt-12 py-6">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>Notes synced from Notion to GitHub</p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default MyApp; 