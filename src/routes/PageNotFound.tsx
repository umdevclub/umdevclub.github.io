import "@/styles/PageNotFound.scss";

import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Click here to return to the landing page</Link>
    </div>
  );
}

export default PageNotFound;
