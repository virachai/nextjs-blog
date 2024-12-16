import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '@/styles/utils.module.css';
import Link from 'next/link';
import { inter } from '@/app/ui/fonts';
import TopNavBar from '@/components/layout/TopNavbar/TopNavbar';
import Footer from '@/components/layout/Footer/Footer';

const name = 'Toy Plus Plus';
export const siteTitle = 'Toy Plus Plus Website';

// Define the types for the props
interface LayoutProps {
  children: React.ReactNode;
  home?: boolean; // Make `home` prop optional
}

export default function Layout({ children, home = false }: LayoutProps) {
  // Default value for `home` is `false`
  return (
    <div className={`${styles.container} ${inter.className} antialiased`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={`${styles.header} p-0`}>
        {home ? (
          <>
            <TopNavBar />
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className="mt-[71px] min-h-svh">{children}</main>
      <footer className="bg-white rounded-lg shadow m-0 dark:bg-gray-800">
        <Footer />
      </footer>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to <span className="material-symbols-outlined">home</span>
          </Link>
        </div>
      )} */}
    </div>
  );
}
