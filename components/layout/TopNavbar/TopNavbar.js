// components/NavBar.js
import Link from "next/link";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TopNavbar.module.css";

// https://m2.material.io/develop/web/getting-started

export default function TopNavbar() {
  useEffect(() => {
    // import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light p-2 px-2 w-screen md:px-3">
      <Link className={`navbar-brand p-0 ${styles.test}`} href="/" tabIndex="1">
        <svg
          className="d-block"
          width="40"
          height="40"
          viewBox="0 0 612 612"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"
          ></path>
          <path
            fill="currentColor"
            d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"
          ></path>
        </svg>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        tabIndex="2"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="/" tabIndex="3">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/features" tabIndex="4">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/pricing" tabIndex="5">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
