import Logo2 from "./assets/Logo2.png";

function footer() {
  return (
    <footer>
      <img src={Logo2} id="footer-logo" />
      <div id="links">
        <p className="nav">Doormat Navigation</p>
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order online</li>
          <li>Login</li>
        </ul>

        <p className="contact">Contact</p>
        <ul className="contact">
          <li>58 fake address</li>
          <li>07000000</li>
          <li>fake_email@mail.com</li>
        </ul>

        <p className="media">Social Media Links</p>
        <ul className="media">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>TikTok</li>
        </ul>
      </div>
    </footer>
  );
}

export default footer;
