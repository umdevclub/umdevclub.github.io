import React from "react";
import "@/styles/ErrorBoundary.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };

    this.refreshPage = this.refreshPage.bind(this);

    this.goBack = this.goBack.bind(this);
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (process.env.NODE_ENV === "development") {
      console.log({
        error: error,
        errorInfor: info,
      });
    }
  }

  refreshPage() {
    window.location.reload();
  }

  goBack() {
    window.history.back();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <h1 className="error-boundary-heading">
            Oops! Something went wrong!
          </h1>
          <p className="error-boundary-text">
            Looks like there is some problem that we are facing. Please check in
            later!
          </p>
          <div className="error-boundary-button-container">
            <button
              className="error-boundary-button"
              onClick={this.refreshPage}
            >
              Refresh page
            </button>
            <button className="error-boundary-button" onClick={this.goBack}>
              Go Back
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
