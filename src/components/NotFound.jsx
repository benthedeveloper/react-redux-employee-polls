import { Link } from "react-router";
import AppHeader from "./AppHeader";

const NotFound = () => {
  return (
    <>
      <AppHeader />
      <div className="page-content">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back to Dashboard</Link>
      </div>
    </>
  );
};

export default NotFound;