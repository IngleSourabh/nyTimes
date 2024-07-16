import style from './cpnavbar.module.scss';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [mobiToggle, setMobiToggle] = useState(false);

  return (
    <nav>
      <div className={style["navbar"]}>
        <div className={style["logo"]}>
          <img src="/vite.svg" alt="logo" className={style["logo-image"]} />
        </div>
        <ul className={style["nav-links-wrap"]}>
          <li className={style["nav-link"]}>
            <Link className={style["link"]} to="/">
              Home
            </Link>
          </li>
          <li className={style["nav-link"]}>
            <Link className={style["link"]} to="/">
              About
            </Link>
          </li>
          <li className={style["nav-link"]}>
            <Link className={style["link"]} to="/">
              Contact
            </Link>
          </li>
        </ul>

        <div className={style["mobile-menu"]}>
          <button
            onClick={() => setMobiToggle(true)}
            className={style["mobilogo"]}
          >
            <FaBars />
          </button>
          {mobiToggle && (
            <div className={style["nav-mobilinks-wrap"]}>
              <ul>
                <li className={style["nav-mobilink"]}>
                  <Link className={style["mobilink"]} to="/">
                    Home
                  </Link>
                </li>
                <li className={style["nav-mobilink"]}>
                  <Link className={style["mobilink"]} to="/">
                    About
                  </Link>
                </li>
                <li className={style["nav-mobilink"]}>
                  <Link className={style["mobilink"]} to="/">
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                onClick={() => setMobiToggle(false)}
                className={style["backbtn"]}
              >
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
