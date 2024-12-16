import Link from 'next/link';
import Image from 'next/image';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import utilStyles from '@/styles/utils.module.css';
import styles from './TopNavbar.module.css';

export default function TopNavbar() {
  useEffect(() => {
    // import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <nav className={`${styles.navs} navbar navbar-expand-md`}>
      <Link className={`${styles.nav_logo} navbar-brand`} href="/" tabIndex={1}>
        <Image
          src="/images/Dino-logo.png"
          height={41}
          width={100}
          alt="Dino-logo"
        />
      </Link>

      <div className={`${styles.nav_lg} hidden md:flex flex-auto justify-end`}>
        <div className={`${styles.nav_menu}`} id="navbarMenu">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="/" tabIndex={3}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about" tabIndex={4}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/toy" tabIndex={5}>
                Toy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/age" tabIndex={6}>
                Age
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Contact" tabIndex={7}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:block md:px-3 lg:px-6 w-1/4">
        <div className="relative">
          <button className="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-4 pl-10 block w-full appearance-none leading-normal border border-transparent rounded-lg text-left select-none truncate bg-gray-200">
            Search
          </button>
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
            <svg
              className="fill-current pointer-events-none text-gray-600 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div id="navbarIconMenu" className="flex flex-row justify-end">
        <Link className="" href="#">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
        <Link
          target="_blank"
          href="https://toyplusplus.vercel.app/"
          className="leading-none border rounded border-blue-500 bg-blue-500 hover:bg-blue-700 text-white"
        >
          <span>Login</span>
        </Link>
      </div>

      <div className={`${styles.nav_mobile} navbar-toggler flex-none`}>
        <button
          className={'navbar-toggler z-10'}
          type="checkbox"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          tabIndex={2}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          type="checkbox"
          className={`${styles.nav_checkbox} navbar-toggler`}
        />
        <div
          className={`${styles.nav_mobile_list} collapse navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" href="/" tabIndex={3}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about" tabIndex={4}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/toy" tabIndex={5}>
                Toy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/age" tabIndex={6}>
                Age
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Contact" tabIndex={7}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
