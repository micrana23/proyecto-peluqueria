import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error de renderizado en la aplicación", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="custom-h1 text-[#4a4a4a]">Algo no ha salido bien</h1>
          <p className="max-w-xl text-[#6b6b6b]">
            No hemos podido cargar esta página. Vuelve al inicio para continuar.
          </p>
          <a
            href="/"
            className="px-8 py-3 border border-[#4a4a4a] text-[#4a4a4a] uppercase tracking-[0.2em] text-sm hover:bg-[#4a4a4a] hover:text-white transition-colors"
          >
            Volver al inicio
          </a>
        </main>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
