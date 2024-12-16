import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from './TopNavbar.module.css';

export default function TopNavbar() {
  useEffect(() => {
    // import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <nav className="flex items-center justify-between p-2 bg-white w-full">
      {/* Logo */}
      <Link
        className={`${styles.nav_logo} flex items-center w-[120px]`}
        href="/"
        tabIndex={1}
      >
        <Image
          src="/images/Dino-logo.png"
          height={41}
          width={100}
          alt="Dino-logo"
        />
      </Link>

      {/* Desktop Navbar Menu */}
      <div className="hidden md:flex flex-grow justify-end">
        <ul className="flex space-x-6">
          <li>
            <Link
              className="text-gray-600 hover:text-blue-500"
              href="/"
              tabIndex={3}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 hover:text-blue-500"
              href="/about"
              tabIndex={4}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 hover:text-blue-500"
              href="/toy"
              tabIndex={5}
            >
              Toy
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 hover:text-blue-500"
              href="/age"
              tabIndex={6}
            >
              Age
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 hover:text-blue-500"
              href="/contact"
              tabIndex={7}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="hidden lg:flex items-center space-x-4 w-min-[200px]">
        <div className="relative">
          <button className="text-gray-600 py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out">
            Search
          </button>
          <div className="absolute left-2 inset-y-0 flex items-center">
            <svg
              className="text-gray-600 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Icon Menu (Cart and Login) */}
      <div className="flex items-center space-x-4">
        <Link href="#">
          <span className="material-symbols-outlined text-gray-600 hover:text-blue-500">
            shopping_cart
          </span>
        </Link>
        <Link
          target="_blank"
          href="https://toyplusplus.vercel.app/"
          className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-lg border border-blue-500"
        >
          <span>Login</span>
        </Link>
      </div>

      {/* Mobile Navbar Menu */}
      <div className="md:hidden">
        <button
          className="flex items-center justify-center text-gray-600 focus:outline-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          tabIndex={2}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Mobile Menu */}
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="flex flex-col space-y-4 mt-4">
            <li>
              <Link
                className="text-gray-600 hover:text-blue-500"
                href="/"
                tabIndex={3}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 hover:text-blue-500"
                href="/about"
                tabIndex={4}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 hover:text-blue-500"
                href="/toy"
                tabIndex={5}
              >
                Toy
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 hover:text-blue-500"
                href="/age"
                tabIndex={6}
              >
                Age
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 hover:text-blue-500"
                href="/contact"
                tabIndex={7}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
