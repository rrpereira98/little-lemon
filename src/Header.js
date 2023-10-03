import { useState } from "react";
import { ReactComponent as LogoSvg } from "./assets/Logo.svg";
import { ReactComponent as BarsSvg } from "./assets/bars-solid.svg";
import { ReactComponent as HamburgerMenu } from "./assets/icon _hamburger menu_.svg";
import { Link } from "react-router-dom";

import { Nav } from "./Nav";

function Header() {
  const [isUlVisible, setIsUlVisible] = useState(false);
  const toggleUlVisibility = () => {
    setIsUlVisible(!isUlVisible);
  };
  return (
    <>
      <header>
        <Link to="/">
          <LogoSvg id="logo" />
        </Link>
        <button onClick={toggleUlVisibility}>
          <HamburgerMenu />
        </button>
      </header>
      {isUlVisible && <Nav />}
    </>
  );
}

export default Header;
