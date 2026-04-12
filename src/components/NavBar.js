import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/add">New Poll</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;