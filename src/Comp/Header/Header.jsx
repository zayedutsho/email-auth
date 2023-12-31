import { Link } from "react-router-dom";
import "../Header/header.css";
const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">LogIn</Link>
      <Link to="/register">Register</Link>
      <Link to="/register-rbs">RegisterRbs</Link>
    </nav>
  );
};

export default Header;
