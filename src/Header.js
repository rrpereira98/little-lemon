import { useState } from "react";
import { ReactComponent as LogoSvg } from "./assets/Logo.svg";
import { ReactComponent as BarsSvg } from "./assets/bars-solid.svg";

import { Nav } from "./Nav";

function Header() {
  const [isUlVisible, setIsUlVisible] = useState(false);
  const toggleUlVisibility = () => {
    setIsUlVisible(!isUlVisible);
  };
  return (
    <>
      <header>
        <LogoSvg />
        <button onClick={toggleUlVisibility}>
          <BarsSvg />
        </button>
      </header>
      {isUlVisible && <Nav />}
    </>
  );
}

export default Header;
