import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Menu</li>
        <Link to="/booking">
          <li>Reservation</li>
        </Link>
        <li>Order online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
