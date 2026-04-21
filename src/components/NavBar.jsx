import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
        <li><NavLink to="/add">New Poll</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;