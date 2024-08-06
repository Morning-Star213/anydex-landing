import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Import assets
import Logo from "../../assets/image/anydex_logo.png";
import GeneralButton from "../common/button/GeneralButton";
import GradientButton from "../common/button/GradientButton";

const Header = () => {
  const [isDropdownNavbar, setIsDropdownNavbar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    if (screenWidth >= 1024) setIsDropdownNavbar(false);
  }, [screenWidth]);

  const DropdownNavbar = () => (
    <div className="fixed left-0 w-full h-screen flex flex-col justify-center items-center z-40 bg-gray-800 text-center">
      <Link
        to="/"
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
        onClick={() => setIsDropdownNavbar(false)}
      >
        Home
      </Link>
      <Link
        to="https://anydex.gitbook.io/the-future-of-dexs."
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
      >
        Docs
      </Link>
      <Link
        to="/trade"
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
        onClick={() => setIsDropdownNavbar(false)}
      >
        Trade
      </Link>
      <Link
        to="/#"
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
      >
        Finance
      </Link>
      <Link
        to="/#"
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
      >
        Earn
      </Link>
      <Link
        to="/#"
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
      >
        Wallet
      </Link>
    </div>
  );

  return (
    <>
      <nav className="fixed h-12 bg-gray-600 w-full 2xl:px-72 xl:px-48 lg:px-36 md:px-24 sm:px-16 px-8 flex flex-row justify-between items-center z-50 bg-opacity-40 backdrop-blur border-b border-gray-500">
        <Link to="/">
          <img src={Logo} className="w-36" alt="logo" />
        </Link>
        <ul className="hidden lg:flex flex-row lg:gap-3 xl:gap-6 text-sm">
          <li className="text-white font-semibold hover:text-theme-light">
            <Link to="https://anydex.gitbook.io/the-future-of-dexs.">Docs</Link>
          </li>
          <li className="text-white font-semibold hover:text-theme-light">
            <Link to="/trade">Trade</Link>
          </li>
          <li className="text-white font-semibold hover:text-theme-light">
            <Link to="/#">Finance</Link>
          </li>
          <li className="text-white font-semibold hover:text-theme-light">
            <Link to="/#">Earn</Link>
          </li>
          <li className="text-white font-semibold hover:text-theme-light">
            <Link to="/#">Wallet</Link>
          </li>
        </ul>
        <div className="hidden lg:flex flex-row gap-2 xl:gap-4">
          <GeneralButton content="Login" size={"sm"} />
          <GradientButton content="Join Us" size={"sm"} />
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsDropdownNavbar(!isDropdownNavbar)}
        >
          <svg
            className="w-6 h-6 text-white hover:text-theme"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </nav>
      {isDropdownNavbar && <DropdownNavbar />}
    </>
  );
};

export default Header;
