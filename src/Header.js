import { ReactComponent as LogoSvg } from "./assets/Logo .svg";

function Header() {
  return (
    <header>
      <LogoSvg />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
