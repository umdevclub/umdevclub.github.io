import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import PageNotFound from "@/routes/PageNotFound";
import "@/styles/ErrorBoundary.scss";
import Header from "./Header";
import Footer from "./Footer";

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  const goBack = () => {
    navigate(-1);
  };

  let errorPage = (
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

  if (isRouteErrorResponse(error) && error.status === 404) {
    errorPage = <PageNotFound />;
  }

  return (
    <>
      <Header />
      <main>{errorPage}</main>
      <Footer />
    </>
  );
}
