import { ReactNode, useState } from "react";
import "@/styles/ErrorBoundary.scss";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };

  const goBack = () => {
    window.history.back();
  };

  const getDerivedStateFromError = () => {
    setHasError(true);
  };

  const componentDidCatch = (error: string, info: string) => {
    if (process.env.NODE_ENV === "development") {
      console.log({
        error: error,
        errorInfo: info,
      });
    }
  };

  if (hasError) {
    return (
      <div className="error-boundary-container">
        <h1 className="error-boundary-heading">Oops! Something went wrong!</h1>
        <p className="error-boundary-text">
          Looks like there is some problem that we are facing. Please check in
          later!
        </p>
        <div className="error-boundary-button-container">
          <button className="error-boundary-button" onClick={refreshPage}>
            Refresh page
          </button>
          <button className="error-boundary-button" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
