import Logo2 from "./assets/Logo2.png";

function footer() {
  return (
    <footer>
      <img src={Logo2} />
      <div>
        <p>Doormat Navigation</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <p>Contact</p>
        <ul>
          <li>58 fake address</li>
          <li>07000000</li>
          <li>fake_email@mail.com</li>
        </ul>
      </div>
      <div>
        <p>Social Media Links</p>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>TikTok</li>
        </ul>
      </div>
    </footer>
  );
}

export default footer;
