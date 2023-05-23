import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_app_title">
        <Link to="/">
          <img src="../images/logo.png" alt="logo" className="header_logo" />
        </Link>
        <b>Helping Hands</b>
      </div>
      <div className="header_navbar">
        <ul className="navbar_list_items">
          <li className="navbar_list_item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar_list_item">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="navbar_list_item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="navbar_list_item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
