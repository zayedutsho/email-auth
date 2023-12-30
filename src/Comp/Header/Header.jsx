import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">LogIn</Link>
      <Link to="/register">Register</Link>
      <Link to="/register-rbs">RegisterRbs</Link>
    </div>
  );
};

export default Header;
