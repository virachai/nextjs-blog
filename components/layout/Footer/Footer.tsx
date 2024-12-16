import Link from 'next/link'; // Import Next.js Link component

export default function Footer() {
  return (
    <div className="w-full px-6 py-2 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{' '}
        <Link href="https://fb.com/virachai.wongsena" passHref>
          Ch.AI
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="hidden flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 lg:flex">
        <li>
          <Link href="#" passHref>
            About
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            Licensing
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
