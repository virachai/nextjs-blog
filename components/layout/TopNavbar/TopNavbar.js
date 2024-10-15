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
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 px-3 w-screen">
      <Link className="navbar-brand" href="/" tabIndex="1">
        toy++
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
      <div className="collapse navbar-collapse" id="navbarNav">
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
      </div>
    </nav>
  );
}
